<?php

/*
 * This file is part of Composer.
 *
 * (c) Nils Adermann <naderman@naderman.de>
 *     Jordi Boggiano <j.boggiano@seld.be>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace Composer\DependencyResolver;

/**
 * Represents a problem detected while solving dependencies
 *
 * @author Nils Adermann <naderman@naderman.de>
 */
class Problem
{
    /**
     * A map containing the id of each rule part of this problem as a key
     * @var array
     */
    protected $reasonSeen;

    /**
     * A set of reasons for the problem, each is a rule or a job and a rule
     * @var array
     */
    protected $reasons = array();

    protected $section = 0;

    protected $pool;

    public function __construct(Pool $pool)
    {
        $this->pool = $pool;
    }

    /**
     * Add a rule as a reason
     *
     * @param Rule $rule A rule which is a reason for this problem
     */
    public function addRule(Rule $rule)
    {
        $this->addReason(spl_object_hash($rule), array(
            'rule' => $rule,
            'job' => $rule->getJob(),
        ));
    }

    /**
     * Retrieve all reasons for this problem
     *
     * @return array The problem's reasons
     */
    public function getReasons()
    {
        return $this->reasons;
    }

    /**
     * A human readable textual representation of the problem's reasons
     *
     * @param  array  $installedMap A map of all installed packages
     * @return string
     */
    public function getPrettyString(array $installedMap = array())
    {
        $reasons = call_user_func_array('array_merge', array_reverse($this->reasons));

        if (count($reasons) === 1) {
            reset($reasons);
            $reason = current($reasons);

            $rule = $reason['rule'];
            $job = $reason['job'];

            if (isset($job['constraint'])) {
                $packages = $this->pool->whatProvides($job['packageName'], $job['constraint']);
            } else {
                $packages = array();
            }

            if ($job && $job['cmd'] === 'install' && empty($packages)) {

                // handle php/hhvm
                if ($job['packageName'] === 'php' || $job['packageName'] === 'php-64bit' || $job['packageName'] === 'hhvm') {
                    $available = $this->pool->whatProvides($job['packageName']);
                    $version = count($available) ? $available[0]->getPrettyVersion() : phpversion();

                    $msg = "\n    - This package requires ".$job['packageName'].$this->constraintToText($job['constraint']).' but ';

                    if (defined('HHVM_VERSION')) {
                        return $msg . 'your HHVM version does not satisfy that requirement.';
                    } elseif ($job['packageName'] === 'hhvm') {
                        return $msg . 'you are running this with PHP and not HHVM.';
                    }

                    return $msg . 'your PHP version ('. $version .') does not satisfy that requirement.';
                }

                // handle php extensions
                if (0 === stripos($job['packageName'], 'ext-')) {
                    $ext = substr($job['packageName'], 4);
                    $error = extension_loaded($ext) ? 'has the wrong version ('.(phpversion($ext) ?: '0').') installed' : 'is missing from your system';

                    return "\n    - The requested PHP extension ".$job['packageName'].$this->constraintToText($job['constraint']).' '.$error.'.';
                }

                // handle linked libs
                if (0 === stripos($job['packageName'], 'lib-')) {
                    if (strtolower($job['packageName']) === 'lib-icu') {
                        $error = extension_loaded('intl') ? 'has the wrong version installed, try upgrading the intl extension.' : 'is missing from your system, make sure the intl extension is loaded.';

                        return "\n    - The requested linked library ".$job['packageName'].$this->constraintToText($job['constraint']).' '.$error;
                    }

                    return "\n    - The requested linked library ".$job['packageName'].$this->constraintToText($job['constraint']).' has the wrong version installed or is missing from your system, make sure to load the extension providing it.';
                }

                if (!preg_match('{^[A-Za-z0-9_./-]+$}', $job['packageName'])) {
                    $illegalChars = preg_replace('{[A-Za-z0-9_./-]+}', '', $job['packageName']);

                    return "\n    - The requested package ".$job['packageName'].' could not be found, it looks like its name is invalid, "'.$illegalChars.'" is not allowed in package names.';
                }

                if (!$this->pool->whatProvides($job['packageName'])) {
                    return "\n    - The requested package ".$job['packageName'].' could not be found in any version, there may be a typo in the package name.';
                }

                return "\n    - The requested package ".$job['packageName'].$this->constraintToText($job['constraint']).' could not be found.';
            }
        }

        $messages = array();

        foreach ($reasons as $reason) {
            $rule = $reason['rule'];
            $job = $reason['job'];

            if ($job) {
                $messages[] = $this->jobToText($job);
            } elseif ($rule) {
                if ($rule instanceof Rule) {
                    $messages[] = $rule->getPrettyString($this->pool, $installedMap);
                }
            }
        }

        return "\n    - ".implode("\n    - ", $messages);
    }

    /**
     * Store a reason descriptor but ignore duplicates
     *
     * @param string $id     A canonical identifier for the reason
     * @param string $reason The reason descriptor
     */
    protected function addReason($id, $reason)
    {
        if (!isset($this->reasonSeen[$id])) {
            $this->reasonSeen[$id] = true;
            $this->reasons[$this->section][] = $reason;
        }
    }

    public function nextSection()
    {
        $this->section++;
    }

    /**
     * Turns a job into a human readable description
     *
     * @param  array  $job
     * @return string
     */
    protected function jobToText($job)
    {
        switch ($job['cmd']) {
            case 'install':
                $packages = $this->pool->whatProvides($job['packageName'], $job['constraint']);
                if (!$packages) {
                    return 'No package found to satisfy install request for '.$job['packageName'].$this->constraintToText($job['constraint']);
                }

                return 'Installation request for '.$job['packageName'].$this->constraintToText($job['constraint']).' -> satisfiable by '.$this->getPackageList($packages).'.';
            case 'update':
                return 'Update request for '.$job['packageName'].$this->constraintToText($job['constraint']).'.';
            case 'remove':
                return 'Removal request for '.$job['packageName'].$this->constraintToText($job['constraint']).'';
        }

        if (isset($job['constraint'])) {
            $packages = $this->pool->whatProvides($job['packageName'], $job['constraint']);
        } else {
            $packages = array();
        }

        return 'Job(cmd='.$job['cmd'].', target='.$job['packageName'].', packages=['.$this->getPackageList($packages).'])';
    }

    protected function getPackageList($packages)
    {
        $prepared = array();
        foreach ($packages as $package) {
            $prepared[$package->getName()]['name'] = $package->getPrettyName();
            $prepared[$package->getName()]['versions'][$package->getVersion()] = $package->getPrettyVersion();
        }
        foreach ($prepared as $name => $package) {
            $prepared[$name] = $package['name'].'['.implode(', ', $package['versions']).']';
        }

        return implode(', ', $prepared);
    }

    /**
     * Turns a constraint into text usable in a sentence describing a job
     *
     * @param  \Composer\Semver\Constraint\ConstraintInterface $constraint
     * @return string
     */
    protected function constraintToText($constraint)
    {
        return ($constraint) ? ' '.$constraint->getPrettyString() : '';
    }
}

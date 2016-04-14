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

namespace Composer\Command;

use Composer\DependencyResolver\Pool;
use Composer\DependencyResolver\DefaultPolicy;
use Composer\Factory;
use Composer\Package\CompletePackageInterface;
use Composer\Semver\VersionParser;
use Composer\Plugin\CommandEvent;
use Composer\Plugin\PluginEvents;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Composer\Repository\ArrayRepository;
use Composer\Repository\CompositeRepository;
use Composer\Repository\ComposerRepository;
use Composer\Repository\PlatformRepository;
use Composer\Repository\RepositoryInterface;
use Composer\Spdx\SpdxLicenses;

/**
 * @author Robert Schönthal <seroscho@googlemail.com>
 * @author Jordi Boggiano <j.boggiano@seld.be>
 */
class ShowCommand extends Command
{
    protected $versionParser;

    protected function configure()
    {
        $this
            ->setName('show')
            ->setAliases(array('info'))
            ->setDescription('Show information about packages')
            ->setDefinition(array(
                new InputArgument('package', InputArgument::OPTIONAL, 'Package to inspect'),
                new InputArgument('version', InputArgument::OPTIONAL, 'Version or version constraint to inspect'),
                new InputOption('installed', 'i', InputOption::VALUE_NONE, 'List installed packages only'),
                new InputOption('platform', 'p', InputOption::VALUE_NONE, 'List platform packages only'),
                new InputOption('available', 'a', InputOption::VALUE_NONE, 'List available packages only'),
                new InputOption('self', 's', InputOption::VALUE_NONE, 'Show the root package information'),
                new InputOption('name-only', 'N', InputOption::VALUE_NONE, 'List package names only'),
                new InputOption('path', 'P', InputOption::VALUE_NONE, 'Show package paths'),
            ))
            ->setHelp(<<<EOT
The show command displays detailed information about a package, or
lists all packages available.

EOT
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $this->versionParser = new VersionParser;

        // init repos
        $platformRepo = new PlatformRepository;

        $composer = $this->getComposer(false);
        $io = $this->getIO();
        if ($input->getOption('self')) {
            $package = $this->getComposer()->getPackage();
            $repos = $installedRepo = new ArrayRepository(array($package));
        } elseif ($input->getOption('platform')) {
            $repos = $installedRepo = $platformRepo;
        } elseif ($input->getOption('installed')) {
            $repos = $installedRepo = $this->getComposer()->getRepositoryManager()->getLocalRepository();
        } elseif ($input->getOption('available')) {
            $installedRepo = $platformRepo;
            if ($composer) {
                $repos = new CompositeRepository($composer->getRepositoryManager()->getRepositories());
            } else {
                $defaultRepos = Factory::createDefaultRepositories($io);
                $repos = new CompositeRepository($defaultRepos);
                $io->writeError('No composer.json found in the current directory, showing available packages from ' . implode(', ', array_keys($defaultRepos)));
            }
        } elseif ($composer) {
            $localRepo = $composer->getRepositoryManager()->getLocalRepository();
            $installedRepo = new CompositeRepository(array($localRepo, $platformRepo));
            $repos = new CompositeRepository(array_merge(array($installedRepo), $composer->getRepositoryManager()->getRepositories()));
        } else {
            $defaultRepos = Factory::createDefaultRepositories($io);
            $io->writeError('No composer.json found in the current directory, showing available packages from ' . implode(', ', array_keys($defaultRepos)));
            $installedRepo = $platformRepo;
            $repos = new CompositeRepository(array_merge(array($installedRepo), $defaultRepos));
        }

        if ($composer) {
            $commandEvent = new CommandEvent(PluginEvents::COMMAND, 'show', $input, $output);
            $composer->getEventDispatcher()->dispatch($commandEvent->getName(), $commandEvent);
        }

        // show single package or single version
        if ($input->getArgument('package') || !empty($package)) {
            $versions = array();
            if (empty($package)) {
                list($package, $versions) = $this->getPackage($installedRepo, $repos, $input->getArgument('package'), $input->getArgument('version'));

                if (!$package) {
                    throw new \InvalidArgumentException('Package '.$input->getArgument('package').' not found');
                }
            } else {
                $versions = array($package->getPrettyVersion() => $package->getVersion());
            }

            $this->printMeta($package, $versions, $installedRepo);
            $this->printLinks($package, 'requires');
            $this->printLinks($package, 'devRequires', 'requires (dev)');
            if ($package->getSuggests()) {
                $io->write("\n<info>suggests</info>");
                foreach ($package->getSuggests() as $suggested => $reason) {
                    $io->write($suggested . ' <comment>' . $reason . '</comment>');
                }
            }
            $this->printLinks($package, 'provides');
            $this->printLinks($package, 'conflicts');
            $this->printLinks($package, 'replaces');

            return;
        }

        // list packages
        $packages = array();

        if ($repos instanceof CompositeRepository) {
            $repos = $repos->getRepositories();
        } elseif (!is_array($repos)) {
            $repos = array($repos);
        }

        foreach ($repos as $repo) {
            if ($repo === $platformRepo) {
                $type = '<info>platform</info>:';
            } elseif (
                $repo === $installedRepo
                || ($installedRepo instanceof CompositeRepository && in_array($repo, $installedRepo->getRepositories(), true))
            ) {
                $type = '<info>installed</info>:';
            } else {
                $type = '<comment>available</comment>:';
            }
            if ($repo instanceof ComposerRepository && $repo->hasProviders()) {
                foreach ($repo->getProviderNames() as $name) {
                    $packages[$type][$name] = $name;
                }
            } else {
                foreach ($repo->getPackages() as $package) {
                    if (!isset($packages[$type][$package->getName()])
                        || !is_object($packages[$type][$package->getName()])
                        || version_compare($packages[$type][$package->getName()]->getVersion(), $package->getVersion(), '<')
                    ) {
                        $packages[$type][$package->getName()] = $package;
                    }
                }
            }
        }

        $tree = !$input->getOption('platform') && !$input->getOption('installed') && !$input->getOption('available');
        $indent = $tree ? '  ' : '';
        foreach (array('<info>platform</info>:' => true, '<comment>available</comment>:' => false, '<info>installed</info>:' => true) as $type => $showVersion) {
            if (isset($packages[$type])) {
                if ($tree) {
                    $io->write($type);
                }
                ksort($packages[$type]);

                $nameLength = $versionLength = 0;
                foreach ($packages[$type] as $package) {
                    if (is_object($package)) {
                        $nameLength = max($nameLength, strlen($package->getPrettyName()));
                        $versionLength = max($versionLength, strlen($package->getFullPrettyVersion()));
                    } else {
                        $nameLength = max($nameLength, $package);
                    }
                }
                list($width) = $this->getApplication()->getTerminalDimensions();
                if (null === $width) {
                    // In case the width is not detected, we're probably running the command
                    // outside of a real terminal, use space without a limit
                    $width = PHP_INT_MAX;
                }
                if (defined('PHP_WINDOWS_VERSION_BUILD')) {
                    $width--;
                }

                if ($input->getOption('path') && null === $composer) {
                    $io->writeError('No composer.json found in the current directory, disabling "path" option');
                    $input->setOption('path', false);
                }

                $writePath = !$input->getOption('name-only') && $input->getOption('path');
                $writeVersion = !$input->getOption('name-only') && !$input->getOption('path') && $showVersion && ($nameLength + $versionLength + 3 <= $width);
                $writeDescription = !$input->getOption('name-only') && !$input->getOption('path') && ($nameLength + ($showVersion ? $versionLength : 0) + 24 <= $width);
                foreach ($packages[$type] as $package) {
                    if (is_object($package)) {
                        $output->write($indent . str_pad($package->getPrettyName(), $nameLength, ' '), false);

                        if ($writeVersion) {
                            $output->write(' ' . str_pad($package->getFullPrettyVersion(), $versionLength, ' '), false);
                        }

                        if ($writeDescription) {
                            $description = strtok($package->getDescription(), "\r\n");
                            $remaining = $width - $nameLength - $versionLength - 4;
                            if (strlen($description) > $remaining) {
                                $description = substr($description, 0, $remaining - 3) . '...';
                            }
                            $output->write(' ' . $description);
                        }

                        if ($writePath) {
                            $path = strtok(realpath($composer->getInstallationManager()->getInstallPath($package)), "\r\n");
                            $output->write(' ' . $path);
                        }
                    } else {
                        $output->write($indent . $package);
                    }
                    $io->write('');
                }
                if ($tree) {
                    $io->write('');
                }
            }
        }
    }

    /**
     * finds a package by name and version if provided
     *
     * @param  RepositoryInterface       $installedRepo
     * @param  RepositoryInterface       $repos
     * @param  string                    $name
     * @param  string                    $version
     * @throws \InvalidArgumentException
     * @return array                     array(CompletePackageInterface, array of versions)
     */
    protected function getPackage(RepositoryInterface $installedRepo, RepositoryInterface $repos, $name, $version = null)
    {
        $name = strtolower($name);
        $constraint = null;
        if ($version) {
            $constraint = $this->versionParser->parseConstraints($version);
        }

        $policy = new DefaultPolicy();
        $pool = new Pool('dev');
        $pool->addRepository($repos);

        $matchedPackage = null;
        $versions = array();
        $matches = $pool->whatProvides($name, $constraint);
        foreach ($matches as $index => $package) {
            // skip providers/replacers
            if ($package->getName() !== $name) {
                unset($matches[$index]);
                continue;
            }

            // select an exact match if it is in the installed repo and no specific version was required
            if (null === $version && $installedRepo->hasPackage($package)) {
                $matchedPackage = $package;
            }

            $versions[$package->getPrettyVersion()] = $package->getVersion();
            $matches[$index] = $package->getId();
        }

        // select preferred package according to policy rules
        if (!$matchedPackage && $matches && $preferred = $policy->selectPreferredPackages($pool, array(), $matches)) {
            $matchedPackage = $pool->literalToPackage($preferred[0]);
        }

        return array($matchedPackage, $versions);
    }

    /**
     * prints package meta data
     */
    protected function printMeta(CompletePackageInterface $package, array $versions, RepositoryInterface $installedRepo)
    {
        $io = $this->getIO();
        $io->write('<info>name</info>     : ' . $package->getPrettyName());
        $io->write('<info>descrip.</info> : ' . $package->getDescription());
        $io->write('<info>keywords</info> : ' . join(', ', $package->getKeywords() ?: array()));
        $this->printVersions($package, $versions, $installedRepo);
        $io->write('<info>type</info>     : ' . $package->getType());
        $this->printLicenses($package);
        $io->write('<info>source</info>   : ' . sprintf('[%s] <comment>%s</comment> %s', $package->getSourceType(), $package->getSourceUrl(), $package->getSourceReference()));
        $io->write('<info>dist</info>     : ' . sprintf('[%s] <comment>%s</comment> %s', $package->getDistType(), $package->getDistUrl(), $package->getDistReference()));
        $io->write('<info>names</info>    : ' . implode(', ', $package->getNames()));

        if ($package->isAbandoned()) {
            $replacement = ($package->getReplacementPackage() !== null)
                ? ' The author suggests using the ' . $package->getReplacementPackage(). ' package instead.'
                : null;

            $io->writeError(
                sprintf('<warning>Attention: This package is abandoned and no longer maintained.%s</warning>', $replacement)
            );
        }

        if ($package->getSupport()) {
            $io->write("\n<info>support</info>");
            foreach ($package->getSupport() as $type => $value) {
                $io->write('<comment>' . $type . '</comment> : '.$value);
            }
        }

        if ($package->getAutoload()) {
            $io->write("\n<info>autoload</info>");
            foreach ($package->getAutoload() as $type => $autoloads) {
                $io->write('<comment>' . $type . '</comment>');

                if ($type === 'psr-0') {
                    foreach ($autoloads as $name => $path) {
                        $io->write(($name ?: '*') . ' => ' . (is_array($path) ? implode(', ', $path) : ($path ?: '.')));
                    }
                } elseif ($type === 'psr-4') {
                    foreach ($autoloads as $name => $path) {
                        $io->write(($name ?: '*') . ' => ' . (is_array($path) ? implode(', ', $path) : ($path ?: '.')));
                    }
                } elseif ($type === 'classmap') {
                    $io->write(implode(', ', $autoloads));
                }
            }
            if ($package->getIncludePaths()) {
                $io->write('<comment>include-path</comment>');
                $io->write(implode(', ', $package->getIncludePaths()));
            }
        }
    }

    /**
     * prints all available versions of this package and highlights the installed one if any
     */
    protected function printVersions(CompletePackageInterface $package, array $versions, RepositoryInterface $installedRepo)
    {
        uasort($versions, 'version_compare');
        $versions = array_keys(array_reverse($versions));

        // highlight installed version
        if ($installedRepo->hasPackage($package)) {
            $installedVersion = $package->getPrettyVersion();
            $key = array_search($installedVersion, $versions);
            if (false !== $key) {
                $versions[$key] = '<info>* ' . $installedVersion . '</info>';
            }
        }

        $versions = implode(', ', $versions);

        $this->getIO()->write('<info>versions</info> : ' . $versions);
    }

    /**
     * print link objects
     *
     * @param CompletePackageInterface $package
     * @param string                   $linkType
     * @param string                   $title
     */
    protected function printLinks(CompletePackageInterface $package, $linkType, $title = null)
    {
        $title = $title ?: $linkType;
        $io = $this->getIO();
        if ($links = $package->{'get'.ucfirst($linkType)}()) {
            $io->write("\n<info>" . $title . "</info>");

            foreach ($links as $link) {
                $io->write($link->getTarget() . ' <comment>' . $link->getPrettyConstraint() . '</comment>');
            }
        }
    }

    /**
     * Prints the licenses of a package with metadata
     *
     * @param CompletePackageInterface $package
     */
    protected function printLicenses(CompletePackageInterface $package)
    {
        $spdxLicenses = new SpdxLicenses();

        $licenses = $package->getLicense();
        $io = $this->getIO();

        foreach ($licenses as $licenseId) {
            $license = $spdxLicenses->getLicenseByIdentifier($licenseId); // keys: 0 fullname, 1 osi, 2 url

            if (!$license) {
                $out = $licenseId;
            } else {
                // is license OSI approved?
                if ($license[1] === true) {
                    $out = sprintf('%s (%s) (OSI approved) %s', $license[0], $licenseId, $license[2]);
                } else {
                    $out = sprintf('%s (%s) %s', $license[0], $licenseId, $license[2]);
                }
            }

            $io->write('<info>license</info>  : ' . $out);
        }
    }
}

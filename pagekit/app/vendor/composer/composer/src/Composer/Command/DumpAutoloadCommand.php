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

use Composer\Plugin\CommandEvent;
use Composer\Plugin\PluginEvents;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * @author Jordi Boggiano <j.boggiano@seld.be>
 */
class DumpAutoloadCommand extends Command
{
    protected function configure()
    {
        $this
            ->setName('dump-autoload')
            ->setAliases(array('dumpautoload'))
            ->setDescription('Dumps the autoloader')
            ->setDefinition(array(
                new InputOption('optimize', 'o', InputOption::VALUE_NONE, 'Optimizes PSR0 and PSR4 packages to be loaded with classmaps too, good for production.'),
                new InputOption('classmap-authoritative', 'a', InputOption::VALUE_NONE, 'Autoload classes from the classmap only. Implicitly enables `--optimize`.'),
                new InputOption('no-dev', null, InputOption::VALUE_NONE, 'Disables autoload-dev rules.'),
            ))
            ->setHelp(<<<EOT
<info>php composer.phar dump-autoload</info>
EOT
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $composer = $this->getComposer();

        $commandEvent = new CommandEvent(PluginEvents::COMMAND, 'dump-autoload', $input, $output);
        $composer->getEventDispatcher()->dispatch($commandEvent->getName(), $commandEvent);

        $installationManager = $composer->getInstallationManager();
        $localRepo = $composer->getRepositoryManager()->getLocalRepository();
        $package = $composer->getPackage();
        $config = $composer->getConfig();

        $optimize = $input->getOption('optimize') || $config->get('optimize-autoloader');
        $authoritative = $input->getOption('classmap-authoritative') || $config->get('classmap-authoritative');

        if ($optimize || $authoritative) {
            $this->getIO()->writeError('<info>Generating optimized autoload files</info>');
        } else {
            $this->getIO()->writeError('<info>Generating autoload files</info>');
        }

        $generator = $composer->getAutoloadGenerator();
        $generator->setDevMode(!$input->getOption('no-dev'));
        $generator->setClassMapAuthoritative($authoritative);
        $generator->dump($config, $localRepo, $package, $installationManager, 'composer', $optimize);
    }
}

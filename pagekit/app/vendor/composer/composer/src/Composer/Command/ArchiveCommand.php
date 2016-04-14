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

use Composer\Factory;
use Composer\IO\IOInterface;
use Composer\Config;
use Composer\Repository\CompositeRepository;
use Composer\Script\ScriptEvents;
use Composer\Plugin\CommandEvent;
use Composer\Plugin\PluginEvents;
use Composer\Util\Filesystem;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

/**
 * Creates an archive of a package for distribution.
 *
 * @author Nils Adermann <naderman@naderman.de>
 */
class ArchiveCommand extends Command
{
    protected function configure()
    {
        $this
            ->setName('archive')
            ->setDescription('Create an archive of this composer package')
            ->setDefinition(array(
                new InputArgument('package', InputArgument::OPTIONAL, 'The package to archive instead of the current project'),
                new InputArgument('version', InputArgument::OPTIONAL, 'A version constraint to find the package to archive'),
                new InputOption('format', 'f', InputOption::VALUE_OPTIONAL, 'Format of the resulting archive: tar or zip'),
                new InputOption('dir', false, InputOption::VALUE_OPTIONAL, 'Write the archive to this directory'),
            ))
            ->setHelp(<<<EOT
The <info>archive</info> command creates an archive of the specified format
containing the files and directories of the Composer project or the specified
package in the specified version and writes it to the specified directory.

<info>php composer.phar archive [--format=zip] [--dir=/foo] [package [version]]</info>

EOT
            )
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $config = Factory::createConfig();
        $composer = $this->getComposer(false);
        if ($composer) {
            $commandEvent = new CommandEvent(PluginEvents::COMMAND, 'archive', $input, $output);
            $composer->getEventDispatcher()->dispatch($commandEvent->getName(), $commandEvent);
            $composer->getEventDispatcher()->dispatchScript(ScriptEvents::PRE_ARCHIVE_CMD);
        }

        if (null === $input->getOption('format')) {
            $input->setOption('format', $config->get('archive-format'));
        }
        if (null === $input->getOption('dir')) {
            $input->setOption('dir', $config->get('archive-dir'));
        }

        $returnCode = $this->archive(
            $this->getIO(),
            $config,
            $input->getArgument('package'),
            $input->getArgument('version'),
            $input->getOption('format'),
            $input->getOption('dir')
        );

        if (0 === $returnCode && $composer) {
            $composer->getEventDispatcher()->dispatchScript(ScriptEvents::POST_ARCHIVE_CMD);
        }

        return $returnCode;
    }

    protected function archive(IOInterface $io, Config $config, $packageName = null, $version = null, $format = 'tar', $dest = '.')
    {
        $factory = new Factory;
        $downloadManager = $factory->createDownloadManager($io, $config);
        $archiveManager = $factory->createArchiveManager($config, $downloadManager);

        if ($packageName) {
            $package = $this->selectPackage($io, $packageName, $version);

            if (!$package) {
                return 1;
            }
        } else {
            $package = $this->getComposer()->getPackage();
        }

        $io->writeError('<info>Creating the archive into "'.$dest.'".</info>');
        $packagePath = $archiveManager->archive($package, $format, $dest);
        $fs = new Filesystem;
        $shortPath = $fs->findShortestPath(getcwd(), $packagePath, true);

        $io->writeError('Created: ', false);
        $io->write(strlen($shortPath) < strlen($packagePath) ? $shortPath : $packagePath);

        return 0;
    }

    protected function selectPackage(IOInterface $io, $packageName, $version = null)
    {
        $io->writeError('<info>Searching for the specified package.</info>');

        if ($composer = $this->getComposer(false)) {
            $localRepo = $composer->getRepositoryManager()->getLocalRepository();
            $repo = new CompositeRepository(array_merge(array($localRepo), $composer->getRepositoryManager()->getRepositories()));
        } else {
            $defaultRepos = Factory::createDefaultRepositories($this->getIO());
            $io->writeError('No composer.json found in the current directory, searching packages from ' . implode(', ', array_keys($defaultRepos)));
            $repo = new CompositeRepository($defaultRepos);
        }

        $packages = $repo->findPackages($packageName, $version);

        if (count($packages) > 1) {
            $package = reset($packages);
            $io->writeError('<info>Found multiple matches, selected '.$package->getPrettyString().'.</info>');
            $io->writeError('Alternatives were '.implode(', ', array_map(function ($p) { return $p->getPrettyString(); }, $packages)).'.');
            $io->writeError('<comment>Please use a more specific constraint to pick a different package.</comment>');
        } elseif ($packages) {
            $package = reset($packages);
            $io->writeError('<info>Found an exact match '.$package->getPrettyString().'.</info>');
        } else {
            $io->writeError('<error>Could not find a package matching '.$packageName.'.</error>');

            return false;
        }

        return $package;
    }
}

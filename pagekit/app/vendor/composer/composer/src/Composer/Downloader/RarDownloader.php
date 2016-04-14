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

namespace Composer\Downloader;

use Composer\Config;
use Composer\Cache;
use Composer\EventDispatcher\EventDispatcher;
use Composer\Util\ProcessExecutor;
use Composer\IO\IOInterface;
use RarArchive;

/**
 * RAR archive downloader.
 *
 * Based on previous work by Jordi Boggiano ({@see ZipDownloader}).
 *
 * @author Derrick Nelson <drrcknlsn@gmail.com>
 */
class RarDownloader extends ArchiveDownloader
{
    protected $process;

    public function __construct(IOInterface $io, Config $config, EventDispatcher $eventDispatcher = null, Cache $cache = null, ProcessExecutor $process = null)
    {
        $this->process = $process ?: new ProcessExecutor($io);
        parent::__construct($io, $config, $eventDispatcher, $cache);
    }

    protected function extract($file, $path)
    {
        $processError = null;

        // Try to use unrar on *nix
        if (!defined('PHP_WINDOWS_VERSION_BUILD')) {
            $command = 'unrar x ' . ProcessExecutor::escape($file) . ' ' . ProcessExecutor::escape($path) . ' && chmod -R u+w ' . ProcessExecutor::escape($path);

            if (0 === $this->process->execute($command, $ignoredOutput)) {
                return;
            }

            $processError = 'Failed to execute ' . $command . "\n\n" . $this->process->getErrorOutput();
        }

        if (!class_exists('RarArchive')) {
            // php.ini path is added to the error message to help users find the correct file
            $iniPath = php_ini_loaded_file();

            if ($iniPath) {
                $iniMessage = 'The php.ini used by your command-line PHP is: ' . $iniPath;
            } else {
                $iniMessage = 'A php.ini file does not exist. You will have to create one.';
            }

            $error = "Could not decompress the archive, enable the PHP rar extension or install unrar.\n"
                . $iniMessage . "\n" . $processError;

            if (!defined('PHP_WINDOWS_VERSION_BUILD')) {
                $error = "Could not decompress the archive, enable the PHP rar extension.\n" . $iniMessage;
            }

            throw new \RuntimeException($error);
        }

        $rarArchive = RarArchive::open($file);

        if (false === $rarArchive) {
            throw new \UnexpectedValueException('Could not open RAR archive: ' . $file);
        }

        $entries = $rarArchive->getEntries();

        if (false === $entries) {
            throw new \RuntimeException('Could not retrieve RAR archive entries');
        }

        foreach ($entries as $entry) {
            if (false === $entry->extract($path)) {
                throw new \RuntimeException('Could not extract entry');
            }
        }

        $rarArchive->close();
    }
}

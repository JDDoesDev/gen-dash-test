<?php

namespace Drupal\genuine_oauth2_connector\Command;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Drupal\Console\Core\Command\Command;
use Drupal\Console\Core\Generator\GeneratorInterface;

/**
 * Class Oauth2GenerateCommand.
 *
 * Drupal\Console\Annotations\DrupalCommand (
 *     extension="genuine_oauth2_connector",
 *     extensionType="module"
 * )
 */
class Oauth2GenerateCommand extends Command {

  /**
   * Drupal\Console\Core\Generator\GeneratorInterface definition.
   *
   * @var \Drupal\Console\Core\Generator\GeneratorInterface
   */
  protected $generator;

  /**
   * Constructs a new Oauth2GenerateCommand object.
   */
  public function __construct(GeneratorInterface $genuine_oauth2_connector_generate_plugin_oauth2_generator) {
    $this->generator = $genuine_oauth2_connector_generate_plugin_oauth2_generator;
    parent::__construct();
  }

  /**
   * {@inheritdoc}
   */
  protected function configure() {
    $this->setName('generate:plugin:oauth2')
      ->setDescription($this->trans('commands.generate.plugin.oauth2.description'))
      ->addOption(
        'module',
        NULL,
        InputOption::VALUE_REQUIRED,
        $this->trans('commands.common.options.module')
      )
      ->addOption(
        'class',
        NULL,
        InputOption::VALUE_OPTIONAL,
        $this->trans('commands.generate.plugin.oauth2.options.class')
      )
      ->addOption(
        'plugin-id',
        NULL,
        InputOption::VALUE_OPTIONAL,
        $this->trans('commands.generate.plugin.oauth2.options.plugin-id')
      )
      ->addOption(
        'plugin-label',
        NULL,
        InputOption::VALUE_OPTIONAL,
        $this->trans('commands.generate.plugin.oauth2.options.plugin-label')
      )
      ->addOption(
        'plugin-url',
        NULL,
        InputOption::VALUE_OPTIONAL | InputOption::VALUE_IS_ARRAY,
        $this->trans('commands.generate.plugin.oauth2.options.plugin-url')
      )
      ->addOption(
        'plugin-states',
        NULL,
        InputOption::VALUE_OPTIONAL | InputOption::VALUE_IS_ARRAY,
        $this->trans('commands.generate.plugin.oauth2.options.plugin-states')
      )
      ->setAliases(['gprr']);
  }

  /**
   * {@inheritdoc}
   */
  protected function interact(InputInterface $input, OutputInterface $output) {
    $this->getIo()->info('interact');
  }

  /**
   * {@inheritdoc}
   */
  protected function execute(InputInterface $input, OutputInterface $output) {
    $this->getIo()->info('execute');
    $this->getIo()->info($this->trans('commands.generate.plugin.oauth2.messages.success'));
    $this->generator->generate([]);
  }

}

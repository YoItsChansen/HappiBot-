const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class FlexCommand extends BaseCommand {
  constructor() {
    super('flex', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('flex command works');
  }
}
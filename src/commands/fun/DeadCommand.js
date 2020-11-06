const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DeadCommand extends BaseCommand {
  constructor() {
    super('dead', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('dead command works');
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PunishCommand extends BaseCommand {
  constructor() {
    super('punish', 'fun', []);
  }

  run(client, message, args) {
    message.channel.send('punish command works');
  }
}
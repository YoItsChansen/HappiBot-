const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class DmCommand extends BaseCommand {
  constructor() {
    super('dm', 'automation', []);
  }

  run(client, message, args) {
    message.channel.send('dm command works \n make kickdot');
  }
}
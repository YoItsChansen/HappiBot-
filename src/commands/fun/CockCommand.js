const BaseCommand = require('../../utils/structures/BaseCommand');

var minprice = 100;
var maxprice = 1000;

module.exports = class CockCommand extends BaseCommand {
  constructor() {
    super('cock', 'fun', []);
  }

  run(client, message, args) {
    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    var listOfCock = ["https://tenor.com/view/dick-cock-oh-yeah-dance-dancing-dick-gif-4598785","https://tenor.com/view/dick-penis-fingers-hands-hand-shape-gif-5167192","https://tenor.com/view/fireworks-cock-dick-awesome-celebration-gif-5471479","https://tenor.com/view/chicken-cock-cockerel-rooster-gif-12255315","https://tenor.com/view/cock-jump-amuse-gif-4939379","https://tenor.com/view/cock-penis-balls-gif-4712025","https://tenor.com/view/black-cock-cockerel-rooster-chicken-indoor-gif-16766232"]
    message.channel.send("<@"+ message.author + "> here's some cock." + listOfCock[randomInt(listOfCock.length)])
  }
}
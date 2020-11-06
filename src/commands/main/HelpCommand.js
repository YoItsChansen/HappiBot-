const Discord = require("discord.js")
const BaseCommand = require('../../utils/structures/BaseCommand');

//Happi Thumbnail     .setThumbnail('https://media0.giphy.com/media/fwo7bzEVxbYS4eSNVd/giphy.gif')

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'main', []);
  }

  run(client, message, args) {
    const embed = new Discord.MessageEmbed()
    .setColor(40,20,50)
    .setTitle("***Help Menu***")
    .setAuthor("HappiBot!")
    .setThumbnail('https://media0.giphy.com/media/fwo7bzEVxbYS4eSNVd/giphy.gif')
    .setDescription("***LIST OF COMMANDS***"
    +"\n ***1. h!help \n - Send all existing commands."
    +"\n 2. h!deadchat \n - Exclusive to Hangout Kingdom, Pings Chat Revivers."
    +"\n 3. h!partners \n - Bot will dm partners"
    +"\n 4. h!profile @mention \n - Sends info about the person you mentioned if they registered their info"
    +"\n 5. h!cock \n - Send a random cock gif ;o"
    +"\n 6. h!kiss @mention \n - Kisses the person you mention"
    +"\n 7. h!lovecalcu @mention \n - Check your compatibility with the person you mentioned"
    +"\n 8. h!love / h!love @mention \n - Sends love :D"
    +"\n 9. h!pickupline @mention \n - Sends a pickupline to the person you mentioned"
    +"\n10. h!8ball [question] \n - Answers your question... ||Truthfully||"
    +"\n11. h!pp / h!pp @mention \n how long ur pp?"
    +"\n12. h!simprate / h!simprate @mention \n - how much of a simp are u?"
    +"\n13. h!tt / h!tt @mention \n - how big ur/their tt?"
    +"\n14. h!ship / h!ship @mention \n - Ships you with a random person in the server / Ships someone else with a random person."
    +"\n15. h!slap @mention \n - Slaps the person you mention."
    +"\n\n *** **~TRUTH OR DARE COMMANDS~** ***"
    +"\n16. h!todecide @mention \n - Decides for the mentioned user. Truth or Dare."
    +"\n17. h!truth @mention \n - Decides a Truth question for the mentioned user."
    +"\n18. h!dare @mention \n - Decides a dare for the mentioned user."
    +"\n19. h!best [topic e.g basketball] @mention @mention @mention @mention (As much mentions as you want.) \n - The best in the specific topic."
    +"***")
  

    .setFooter(" Bot created: 11/02/20 \n Bot creator: Happi#2112 \n Bot created for: Kingdom and Hangout Kingdom")
    message.channel.send(embed)
  }
}
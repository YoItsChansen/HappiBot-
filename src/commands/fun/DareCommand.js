const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class DareCommand extends BaseCommand {
  constructor() {
    super('dare', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    const arrayDares = ["Dm a random person and ask for nudes.",
                                                                                                  "Confess to your crush.",
                                                                                                "Show your last dm that has some juicy info ;)",
                                                                                              "Talk dirty to your crush.",
                                                                                            "Dm your crush and say, You're super yammy... Can I taste you? ",
                                                                                            "Complient your crush. Make sure that it suggests that u like him/her ",
                                                                                          "Message a random dirty joke to someone.(Opposite sex)",
                                                                                        "With only your elbows. Type a Social Media status and post it.",
                                                                                      "Screenshot your Browsing history and send it to your parents.",
                                                                                    "Send a random person the dirtiest message you can think of.(Opposite sex)",
                                                                                  "Put the person who picked you as your wallpaper for 2 days.",
                                                                                "Video yourself dancing with no music (Min. 1 min video)",
                                                                              "Make a romantic convo to someone your gender. Send us the results.",
                                                                            "Make a post in social media suggesting you are sad.",
                                                                            "Say hi to your teacher and never reply back.Send a screenshot."
                                                                          ]
    const embed = new Discord.MessageEmbed()
    .setAuthor("HappiBot! Truth or Dare")
    .setDescription("Difficult dares can be done within the day.")
    function rand(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(mentioned){
      embed.setTitle("For: "+mentioned.username+"\nDare: "+arrayDares[rand(arrayDares.length)])
    }else if(!mentioned){
      embed.setTitle("DUM DUM MENTION SOMEONE OML IM TIRED OF REMINDING UR DUM DUM ASS.")
    }
    message.reply(embed)
  }
}
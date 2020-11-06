const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class TodCommand extends BaseCommand {
  constructor() {
    super('truth', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()
    const embed = new Discord.MessageEmbed()
    .setAuthor("HappiBot! Truth or Dare!")
    .setDescription("If "+mentioned.username+" does not answer the truth. He/She will be punished.")
    function rand(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    const arrayTruths = ["Who is your crush?",
                                                                            "Most attractive in your class last year? Give us his/her Social Media acc.",
                                                                          "Who would you ||Fuck|| in the class last year? Give us his/her Social Media acc.",
                                                                        "Have you ever cheated on someone?",
                                                                      "Whats the worst thing you have ever done?",
                                                                    "What was the first sexual content you ever saw? From which website?",
                                                                  "BIGGEST LIE YOU HAVE EVER SAID TO YOUR CRUSH?",
                                                                "If you were able to call someone ugly in your previous batch who would it be? Provide their social media acc.",
                                                              "Most sexual thing you have searched on on your phone?",
                                                            "Have you ever tried sexting? If you did with who? If you didnt what would likely turn you on in a sexting convo?",
                                                          "Have you ever peed in a pool?",
                                                        "Have you ever tasted booger?",
                                                      "Have you ever seen your parents having fucktime in the bed?",
                                                    "True or False. Do you have a crush on [Mention a name]",
                                                  "Have you ever farted in a elevator?",
                                                "Have you ever tried kissing yourself in the mirror? Why?",
                                              "What is your dirtiest hobby?",
                                            "Have you ever walked into a wall? What were you thinking of?",
                                          "Have you ever peed on the beach?",
                                        "Embarassing moments (Within the last 1 year.)",
                                      "Have you ever picked your nose in class?",
                                    "Have you ever tried seducting someone intentionally?",
                                  "List the names of your top 5 crushes.(People who actually know u), Give us their social media accounts.",
                                "Who is the sexiest person in the Voice call or Playing the game right now.",
                              "Rate your looks (1-10) be honest.",
                            "Longest time you repeated wearing your underwear.",
                          "What do you not like about the person who picked you?",
                        "Do you think [fill in the blank] is cute?",
                      "What do you not like about the person who picked you?",
                    "Embarassing moment in public?"]
    if(mentioned){
      embed.setTitle("For: "+mentioned.username+"\nTruth: "+arrayTruths[rand(arrayTruths.length)])
    } else if(!mentioned){
      embed.setTitle("Pick someone dum dum...")
    }
    message.reply(embed)
  }
}
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class PickuplineCommand extends BaseCommand {
  constructor() {
    super('pickupline', 'fun', []);
  }

  run(client, message, args) {
    const mentioned = message.mentions.users.first()


    //Config:
    
    //Array of Pickuplines
    var arrayPickups = ["Are you a flower? because you're blooming everyday ;o",
                                                                  "Are you a magician? Because whenever I look at you, everyone else disappears!",
                                                                  "I’m not a photographer, but I can picture me and you together.",
                                                                "Do I know you? ‘Cause you look a lot like my next girlfriend/boyfriend.",
                                                                "Do you know what my shirt is made of? Boyfriend/girlfriend material.",
                                                              "They say Disneyland is the happiest place on earth. Well apparently, no one has ever been standing next to you.",
                                                            "For some reason, I was feeling a little off today. But when you came along, you definitely turned me on.",
                                                          "Are you religious? Because you’re the answer to all my prayers.",
                                                        "I seem to have lost my phone number. Can I have yours?",
                                                      "I’m lost. Can you give me directions to your heart?",
                                                    "Are you a parking ticket? ‘Cause you’ve got fine written all over you.",
                                                  "Are you sure you’re not tired? You’ve been running through my mind all day.",
                                                "Is there an airport nearby or is it my heart taking off?",
                                              "Was your dad a boxer? Because damn, you’re a knockout!",
                                            "I was wondering if you had an extra heart. Mine was just stolen.",
                                          "Would you grab my arm, so I can tell my friends I’ve been touched by an angel?",
                                        "There’s only one thing I want to change about you, and that’s your last name.",
                                      "Aside from being sexy, what do you do for a living?",
                                    "Do you believe in love at first sight or should I pass by again?",
                                  "Did the sun come out or did you just smile at me?",
                                "Kiss me if I’m wrong, but dinosaurs still exist, right?",
                              "Hey, you’re pretty and I’m cute. Together we’d be Pretty Cute.",
                            " Can I follow you home? Cause my parents always told me to follow my dreams.",
                          "Is your name Google? Because you have everything I’ve been searching for.",
                        "I may not be a genie, but I can make your dreams come true.",
                      "If nothing lasts forever, will you be my nothing?",
                    "There must be something wrong with my eyes, I can’t take them off you.",
                  "Was your father a thief? ‘Cause someone stole the stars from the sky and put them in your eyes.",
                "Do you have a pencil? Cause I want to erase your past and write our future.",
              "I’d say God Bless you, but it looks like he already did.",
            "I must be in a museum, because you truly are a work of art.",
          "Are you my phone charger? Because without you, I’d die.",
        "Can you take me to the doctor? Because I just broke my leg falling for you.",
      "You don’t need keys to drive me crazy.",
    "Are you a dictionary? Cause you’re adding meaning to my life.",
  "I’m no mathematician, but I’m pretty good with numbers. Tell you what, give me yours and watch what I can do with it.",
"Didn’t I see you on the cover of Vogue?"]


    //Array of Gifs
    var arraygifs = ["https://i.pinimg.com/originals/42/4c/15/424c1527be589bf0f0225f3348fa5b6b.gif",
     "https://i.pinimg.com/originals/e7/7d/88/e77d886468e588775b9b69358e090cc4.gif",
    "https://i.pinimg.com/originals/9a/7b/6f/9a7b6ff335c5bfb2f95f461556df8631.gif",
     "https://i.pinimg.com/originals/6a/10/c1/6a10c19ede136e7e50a140fc8fe0277c.gif",
     "https://64.media.tumblr.com/fe0299cc35745d046209b1487ebfbfcc/tumblr_p5m6mho4k11vlu708o1_400.gifv"]










    function randomInt(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    if(mentioned){
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setTitle("***A pickup line to: "+mentioned.username+"***")
      .setDescription("***"+arrayPickups[randomInt(arrayPickups.length)]+"***")
      .setThumbnail(arraygifs[randomInt(arraygifs.length)])
      message.reply(embed)
    }else if (!mentioned){
      const embed2 = new Discord.MessageEmbed()
      .setAuthor(message.author.username)
      .setTitle("You dum dum... Ping someone!")
      message.reply(embed2)
    }
  }
}
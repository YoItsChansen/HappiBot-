const { DiscordAPIError } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
module.exports = class KissCommand extends BaseCommand {
  constructor() {
    super('kiss', 'fun', []);
  }

  run(client, message, args) {
    const mentioneduser = message.mentions.users.first()
    function randomness(max){
      return Math.floor(Math.random() * Math.floor(max));
    }
    const arraygifs = ["https://tenor.com/view/anime-kiss-love-sweet-gif-5095865",
                                                                                                                      "https://i.pinimg.com/originals/04/7e/1b/047e1bef01702b9252ef3a528a2401ad.gif",
                                                                                                                    "https://media1.tenor.com/images/78095c007974aceb72b91aeb7ee54a71/tenor.gif?itemid=5095865",
                                                                                                                  "https://media1.tenor.com/images/b088ccf8075a4113efcbc5bc31fa46c2/tenor.gif?itemid=17668336",
                                                                                                                "https://i.pinimg.com/originals/e3/4e/31/e34e31123f8f35d5c771a2d6a70bef52.gif",
                                                                                                              "https://i.imgur.com/N7npWrB.gif",
                                                                                                            "https://thumbs.gfycat.com/FailingGrimyGar-small.gif",
                                                                                                          "https://24.media.tumblr.com/5d51b3bbd64ccf1627dc87157a38e59f/tumblr_n5rfnvvj7H1t62gxao1_500.gif",
                                                                                                        "https://thumbs.gfycat.com/AgedWhisperedBarnacle-small.gif",
                                                                                                      "https://i.pinimg.com/originals/e0/0f/31/e00f3104927ae27d7d6a32393d163176.gif",
                                                                                                    "https://media1.tenor.com/images/68a37a5a1b86f227b8e1169f33a6a6bb/tenor.gif?itemid=13344389",
                                                                                                  "https://media3.giphy.com/media/X3ndlrK6rOCt2/source.gif",
                                                                                                "https://media1.giphy.com/media/flmwfIpFVrSKI/giphy.gif",
                                                                                              "https://cdn.lowgif.com/full/a83dce7fd4dda8f8-anime-kiss-gifs-find-share-on-giphy.gif",
                                                                                            "https://pa1.narvii.com/5823/11e01b02a863643bc41effbdfc950013f411f7c1_hq.gif",
                                                                                          "https://pa1.narvii.com/5694/3f17629b39bb381cd1448873f56c2acea340b62e_hq.gif",
                                                                                        "https://cutewallpaper.org/21/anime-kiss-girl/Romantic-Anime-Kiss-GIF-by-Reactions.gif",
                                                                                      "https://media1.tenor.com/images/503bb007a3c84b569153dcfaaf9df46a/tenor.gif?itemid=17382412",
                                                                                    "https://cdn.myanimelist.net/s/common/uploaded_files/1483589602-6b6484adddd5d3e70b9eaaaccdf6867e.gif",
                                                                                  "https://media1.tenor.com/images/e465e6d985dd5b9770857d2b290262fa/tenor.gif?itemid=12632457",
                                                                                "https://i.pinimg.com/originals/32/d4/f0/32d4f0642ebb373e3eb072b2b91e6064.gif",
                                                                              "https://data.whicdn.com/images/146256139/original.gif",
                                                                            "https://pa1.narvii.com/6248/cae38662b21747d6247776d35b8d2db50944ef08_hq.gif",
                                                                          "https://pa1.narvii.com/6380/bef5f29916ba06f161e12e62c6c7fe49a2d619c5_hq.gif",
                                                                        "https://i.imgur.com/lmY5soG.gif",
                                                                      "https://media1.tenor.com/images/5d2b53028b305f56ae753d6a7a988f6b/tenor.gif?itemid=12997856",
                                                                    "https://cdn.myanimelist.net/s/common/uploaded_files/1483588705-b321623c459d2a7001761459d2c8707a.gif",
                                                                  "https://steamuserimages-a.akamaihd.net/ugc/1246883268583638534/0B60C0049DEC634303CEC7ADF004CE3BC911CB5A/",
                                                                "https://steamuserimages-a.akamaihd.net/ugc/199680985365594605/AE3C81B51ABCC9CEBEA0C82D8FC3CF02BA02A198/"]
    const arrayphrases = [" kisses ", " smooches "," mwa mwa'd ", " loves ", " pecked ", " made out with ", " performed the french kiss with ", " stole the heart of ", " stole a kiss from ", " mwa mwa choop choop'd "]
    const embedded = new Discord.MessageEmbed()
    .setTitle("Aweeee! How sweet.")
    .setDescription("***"+message.author.username+arrayphrases[randomness(arrayphrases.length)]+mentioneduser.username+"***")
    .setImage(arraygifs[randomness(arraygifs.length)])
    message.reply(embedded)
    
  }
}
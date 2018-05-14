const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
var prefix = "<G>";
bot.on('ready', function(){
  bot.user.setGame("DBZ, <G>help");
});
var rep = ["je joue","je parle","j'écoute de la musique","je regarde un anime"];
var phrase = ["Tu suces ? MDR", "Tu pues du cul !","Tu es un trans ? XD","Askip tu as un pc en carton :p","Si y a ton ex qui te dit : tu retrouvera jamais quelqu'un comme moi . dit lui : heureusement","T'es comme France 2 personne te regarde.","Tu ne m'arrives pas à la cheville mais si un jour tu l'atteints, soit gentille et fais moi mes lacets.","Commence par t'occuper de ton cul, au vue de la superficie cela devrait t'occuper longtemps !","-Tu sais ce qui est bien chez toi?\n-Nan\n-Bah moi non plus","- Tu viens à ma soirée fruits de mer et poissons ?\n- Oui avec plaisir\n- Tant mieux j'avais besoin d'un thon","Ta bouche c'est comme une porte, ça se ferme!" ];
bot.on('message', message =>{
  const msg = message.content;
  if(msg === (prefix+"help")){
       var embed = new Discord.RichEmbed()
            .setTitle("Help")
            .setDescription("Liste des commandes de Goku")
            .setaddField("Prefix","<G>")
            .setaddField("Discuter avec Goku", "'bonjour', 'ça va', 'tu fais quoi ?', 'rien', 'je joue', 'je parle', 'j'écoute de la musique', 'je regarde un anime'")
            .setFooter("Créer par Goku","https://imgur.com/a/gqLOFzz")     
            .setColor("#0155FE")
            .setTimestamp();
       message.channel.sendEmbed(embed);
  }
   if(msg === (prefix+"bonjour")){
      message.reply("Bonjour à toi");
        var reveille = ["image/bonjour.gif","image/bonjour2.gif","image/bonjour3.gif"];
        var randomr = Math.floor(Math.random()*reveille.length);
        return message.channel.sendFile(reveille[randomr]);
   }
  if(msg === (prefix+"ça va")){
        message.reply("Oui et toi ?");
   }
  if(msg === (prefix+"oui")){
        message.reply("Tant mieux :blush:");
   }
  if(msg === (prefix+"tu fais quoi ?")){
        message.reply("J'emmerde les gens :smile: et toi ?");
   }
  if(msg === (prefix+rep[0]) || msg === (prefix+rep[1]) || msg === (prefix+rep[2]) || msg === (prefix+rep[3])){
        message.reply("Cool :blush:");
   }
  if(msg === (prefix+"rien")){
        message.reply("Attends, j'arrive !");
   }
  if(msg === (prefix+"amuse toi bien =3")){
        message.reply("Merci, toi aussi !");
  }
  if(msg === (prefix+"botname")){
        bot.user.setUsername(message.substr(9)); 
  }
  if(msg === (prefix+"XD")){
    let membre = message.guild.member(message.mentions.users.first())
    if(membre){ 
    var r = Math.floor(Math.random()*phrase.length);
      return message.channel.sendMessage(phrase[r]);
    }
  }

});
  bot.on('guildMemberAdd', member =>{
    member.createDM().then(function(channel){
        return channel.send("Bienvenue dans le monde du Japon, Amuse-toi bien avec nous à découvrir ce monde. :blush:")
    })
  });
  bot.on('guildMemberRemove', member =>{
    member.createDM().then(function(channel){
        return channel.send("Au revoir, nous espérons te revoir bientôt dans ce monde merveilleux qui est le Japon. :blush:")
    })
});
bot.login(process.env.TOKEN);

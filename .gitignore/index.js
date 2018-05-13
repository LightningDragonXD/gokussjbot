const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
var prefix = "<G>";
bot.on('ready', function(){
  bot.user.setGame("DBZ, <G>help");
});
var rep = ["je joue","je parle","j'écoute de la musique","je regarde un anime"];
var phrase = ["Tu suces ? MDR", "Tu pues du cul !","Tu es un trans ? XD","Askip tu as un pc en carton :p","Si y a ton ex qui te dit : tu retrouvera jamais quelqu'un comme moi . dit lui : heureusement","T'es comme France 2 personne te regarde.","Tu ne m'arrives pas à la cheville mais si un jour tu l'atteints, soit gentille et fais moi mes lacets.","Commence par t'occuper de ton cul, au vue de la superficie cela devrait t'occuper longtemps !","-Tu sais ce qui est bien chez toi?\n-Nan\n-Bah moi non plus","- Tu viens à ma soirée fruits de mer et poissons ?\n- Oui avec plaisir\n- Tant mieux j'avais besoin d'un thon","Ta bouche c'est comme une porte, ça se ferme!" ];
bot.on('message', function(message){
   if(message.content === (prefix+"bonjour")){
      message.reply("Bonjour à toi");
        var reveille = ["image/bonjour.gif","image/bonjour2.gif","image/bonjour3.gif"];
        var randomr = Math.floor(Math.random()*reveille.length);
        return message.channel.sendFile(reveille[randomr]);
   }else if(message.content === (prefix+"ça va")){
        message.reply("Oui et toi ?");
   }else if(message.content === (prefix+"oui")){
        message.reply("Tant mieux :blush:");
   }else if(message.content === (prefix+"tu fais quoi ?")){
        message.reply("J'emmerde les gens :smile: et toi ?");
   }else if(message.content === (prefix+rep[0]) || message.content === (prefix+rep[1]) || message.content === (prefix+rep[2]) || message.content === (prefix+rep[3])){
        message.reply("Cool :blush:");
   }else if(message.content === (prefix+"rien")){
        message.reply("Attends, j'arrive !");
   }else if(message.content === (prefix+"amuse toi bien =3")){
        message.reply("Merci, toi aussi !");
  }else if(message.content === (prefix+"botname")){
        bot.user.setUsername(message.substr(9)); 
  }else if(message.content === (prefix+"XD")){
      var r = Math.floor(Math.random()*phrase.length);
      return message.channel.sendMessage(phrase[r]);
    
  }
});
bot.login(process.env.TOKEN);

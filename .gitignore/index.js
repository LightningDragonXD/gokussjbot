const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "<G>";
bot.on('ready', function(){
  bot.user.setGame("DBZ, <G>help");
});
var rep = ["je joue","je parle","j'écoute de la musique","je regarde un anime"];
bot.on('message', function(message){
   if(message.content === (prefix+"bonjour")){
      message.reply("Bonjour à toi");
        var reveille = ["image/bonjour.gif","image/bonjour2.gif","image/bonjour3.gif"];
        var randomr = Math.floor(Math.random()*reveille.length);
        return message.channel.sendFile(reveille[randomr]);
   }else if(message.content === (prefix+"ça va ?")){
        message.reply("Oui et toi ?");
   }else if(message.content === (prefix+"oui")){
        message.reply("Tant mieux :blush:");
   }else if(message.content === (prefix+"tu fais quoi ?")){
        message.reply("J'emmerde les gens :smile: et toi ?");
   }else if(message.content === (prefix+rep[0]) || message.content === (prefix+rep[1]) || message.content === (prefix+rep[2]) || message.content === (prefix+rep[3])){
        message.reply("Cool :blush:");
   }else if(message.content === (prefix+"rien")){
        message.reply("Attends, j'arrive !");
   }
});
bot.login(process.env.TOKEN);

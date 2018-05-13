const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "<G>";
bot.on('ready', function(){
  bot.user.setGame("DBZ, <G>help");
});
bot.on('message', function(message){
   if(message.content === (prefix+"bonjour")){
      message.reply("Bonjour à toi");
        var reveille = ["image/bonjour.gif","image/bonjour2.gif","image/bonjour3.gif"];
        var randomr = Math.floor(Math.random()*reveille.length);
        return message.channel.sendFile(reveille[randomr]);
   }
});
bot.login(process.env.TOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', function(){
  bot.user.setGame("DBZ, <G>help");
});
bot.login(process.env.TOKEN);

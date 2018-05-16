const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
const Music = require("./Music.js");
const ffmpeg = require("ffmpeg");
const music = new Music();
const yt = require("./youtube_plugin");
const youtube_plugin = new yt();
const search = require('youtube-search');
const AuthDetails = require("./auth.json");
const functionHelper = require('./functionHelpers.js');
const ytdl = require('ytdl-core');
var moment = require("moment");
const prefix = "&";
bot.on('ready', function(){
  bot.user.setGame("DBZ, &help");
});
var rep = ["je joue","je parle","j'écoute de la musique","je regarde un anime"];
var phrase = ["Tu pues du cul !","Tu es un trans ? :joy:","Askip tu as un pc en carton :yum:","Si y a ton ex qui te dit : tu retrouvera jamais quelqu'un comme moi . dit lui : heureusement","T'es comme France 2 personne te regarde.","Tu ne m'arrives pas à la cheville mais si un jour tu l'atteints, soit gentil(le) et fais moi mes lacets.","Commence par t'occuper de ton cul, au vue de la superficie cela devrait t'occuper pour longtemps !","-Tu sais ce qui est bien chez toi?\n-Nan\n-Bah moi non plus","- Tu viens à ma soirée fruits de mer et poissons ?\n- Oui avec plaisir\n- Tant mieux j'avais besoin d'un thon","Ta bouche c'est comme une porte, ça se ferme!" ];
function sendError(message, description){
   var embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .setDescription(':x: '+ description)
  message.channel.sendEmbed(embed);
}

bot.on('message', message => {
  //commandes
  if(message.content[0] === prefix){
  let splitM = message.content.split(" ");
  if(splitM[0] === (prefix+'help')){
    if(splitM.length === 1){
       var embed = new Discord.RichEmbed();
            embed.setTitle('Help')
            .setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
            .setDescription('Liste des commandes de Goku')
            .addField('Prefix', '&')
            .addField("Discuter avec Goku", "`bonjour`, `ça va`, `tu fais quoi ?`, `rien`, `je joue`, `je parle`, `j'écoute de la musique`, `je regarde un anime`")
            .addField("Commandes Fun", "`XD`, `hug`, `punch`, `like`, `psycho`, `sad`")
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp() 
            .setColor("#0155FE")
       message.channel.sendEmbed(embed);
    }else{
        sendError(message,"Erreur, problèmes dans les paramètres.");
    }
  }
    //bot musique
  music.setVoiceChannel(message.member.voiceChannel);
  messages.push(message);
  if(splitM[0] === (prefix+"play")){
     message.delete(message.author);
     if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            else music.voice();
  }else if(splitM[0] === (prefix+"pause")){
           message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            music.pause();
  }else if(splitM[0] === (prefix+"resume")){
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            music.resume();
  }else if(splitM[0] === (prefix+"stop")){
           message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            else music.stop();
            message.reply("La playlist à était vidée !");
  }else if(splitM[0] === (prefix+"add")){
           message.delete(message.author);
            var link = msgc.split(' ');
            link.shift();
            link = link.join(' ');
            search(link, opts, function(err, results) {
                if(err) return con(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                message.channel.sendMessage(results[y].link);
                music.setTabEnd(results[y].link);
            });
  }else if(splitM[0] === (prefix+"link")){
            message.delete(message.author);
            var link = msgc.split(' ');
            link.shift();
            link = link.join(' ');
            con(link);
            music.setTabEnd(link);
  }else if(splitM[0] === (prefix+"volume")){
           message.delete(message.author);
            var link = msgc.split(' ');
            link.shift();
            link = link.join(' ');
            music.volume(link/100);
            message.reply("le volume est maintenant à : " + link);
  }else if(splitM[0] === (prefix+"next")){
            message.delete(message.author);
            if (music.getI() < music.getLengthTab()) music.setI(this.i + 1);
            if (music.getI() >= music.getLengthTab()) music.setI(0);
            music.next(); 
  }
  var reveille = ["https://i.imgur.com/6XWJUPl.gif","https://i.imgur.com/Khl3DLb.gif","https://i.imgur.com/H67C3jV.gif"];
  if(splitM[0] === (prefix+'bonjour')){
        var r = Math.floor(Math.random()*reveille.length);
        var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+"Bonjour à toi :smile:")
                .setImage(reveille[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#6600FE")
         message.channel.sendEmbed(embed);
   }
  if(splitM[0] === (prefix+"ça va")){
        message.reply("Oui et toi ?");
   }
  if(splitM[0] === (prefix+"oui")){
        message.reply("Tant mieux :blush:");
   }
  if(splitM[0] === (prefix+"tu fais quoi ?")){
        message.reply("J'emmerde les gens :smile: et toi ?");
   }
  if(splitM[0] === (prefix+rep[0]) || splitM[0] === (prefix+rep[1]) || splitM[0] === (prefix+rep[2]) || splitM[0] === (prefix+rep[3])){
        message.reply("Cool :blush:");
   }
  if(splitM[0] === (prefix+"rien")){
        message.reply("Attends, j'arrive !");
   }
  if(splitM[0] === (prefix+"amuse toi bien =3")){
        message.reply("Merci, toi aussi !");
  }
  if(splitM[0] === (prefix+"botname")){
        bot.user.setUsername(message.substr(9)); 
  }
  if(splitM[0] === (prefix+"XD")){
    if(splitM.length === 2){
    let membre = message.guild.member(message.mentions.users.first());
      if(membre){
        var r = Math.floor(Math.random()*phrase.length);
          return message.channel.sendMessage(phrase[r]);
      }
    }else {
      sendError(message,"Erreur, problèmes de mentions");
    }
  }
  var coup = ["https://i.imgur.com/A5WGQI3.gif","https://i.imgur.com/rak3nEw.gif","https://i.imgur.com/0h9LpJm.gif","https://i.imgur.com/oLrl3ys.gif"];
  if(splitM[0] === (prefix+"punch")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*coup.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" donne un sacré coup de poing à "+membre+" ! :scream:")
                .setImage(coup[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#FE9901")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
    var calin = ["https://i.imgur.com/g5qHUlx.gif","https://i.imgur.com/EfobnJ4.gif","https://i.imgur.com/hZhO8vW.gif","https://i.imgur.com/OjmPBRj.gif"];
  if(splitM[0] === (prefix+"hug")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*calin.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" fait un gros câlin à "+membre+" ! :flushed:")
                .setImage(calin[r])
                .setColor("#FE0166")
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
    
  if(splitM[0] === (prefix+"like")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){     
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" aime bien "+membre+" :smile:. Tu seras un(e) très bon(ne) ami(e)")
                .setImage("https://imgur.com/Ro6K1b7.gif")
                .setColor("#FE0166")
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
  
    if(splitM[0] === (prefix+"ban")){
      if(splitM.length === 2){
        message.guild.ban(message.guild.member(message.mentions.users.first()));
      }else {
          sendError(message,"Erreur, problèmes de mentions");
      }
    }
    if(splitM[0] === (prefix +'kick')){
          if(splitM.length === 2){
               message.guild.kick(message.guild.member(message.mentions.users.first()));
          }else {
              sendError(message,"Erreur, problèmes de mentions");
          }
        }
    var sang = ["https://i.imgur.com/xTRwnJ6.gif","https://i.imgur.com/LgF2cul.gif","https://i.imgur.com/SD9N08s.gif"];
  if(splitM[0] === (prefix+"psycho")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*sang.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" prend le sang à "+membre+" ! :yum:")
                .setImage(sang[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#FE0000")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
  var triste = ["https://i.imgur.com/tpyXSxo.gif","https://i.imgur.com/9GnWzJx.gif","https://i.imgur.com/itzVtAZ.gif"];
  if(splitM[0] === (prefix+"sad")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*triste.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .addField(triste[r])
                .setDescription(message.author.toString()+" fait pleurer "+membre+" ! :sob:")
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#01FE7F")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
}
  //jeux de mots
  var re = ["nard","quin","pas","passage","tard","bond","naud","mise","belle","bique","tour"];
  var ah = ["vril","vion","bois","ssis","llongé","ccroupi", "tchoum","tes souhaits"];
if(message.content === "re" || message.content === "Re"){
     var r = Math.floor(Math.random()*re.length);
     return message.channel.sendMessage(re[r]);
   }
  if(message.content === "ah" || message.content === "Ah"){
     var r = Math.floor(Math.random()*ah.length);
     return message.channel.sendMessage(ah[r]);
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

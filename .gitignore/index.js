const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js';
const Wiki = require("wikijs");
const express = require("express");
const app = express();
const yt = require("./youtube_plugin");
const youtube_plugin = new yt();
const AuthDetails = require("./auth.json");
const Music = require("./Music.js");
const functionHelper = require('./functionHelpers.js');
const ffmpeg = require("ffmpeg");
const search = require('youtube-search');
const music = new Music();   
const con = console.log;
var moment = require("moment");
var mention = "<@401421641097412608>";
const opts = {
  maxResults: 3,
  key: AuthDetails.youtube_api_key
};
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
  }
  music.setVoiceChannel(message.member.voiceChannel);
    var array_msg = message.content.split(' ');
            messages.push(message);
            switch (array_msg[0]) {
        case (prefix +"play") :
            con("Play");
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            else music.voice();
            break;
        case (prefix +"pause") :
            con("Pause");
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            music.pause();
            break;
        case (prefix + "resume") :
            con("Resume");
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            music.resume();
            break;
        case (prefix + "stop") :
            con("Stop");
            message.delete(message.author);
            if (!music.getVoiceChannel()) return message.reply("Veuillez vous connectez en vocal !");
            if (music.getTab(0) == null) return message.reply('Aucune musique, merci d\' en ajouté.');
            else music.stop();
            message.reply("La playlist à était vidée !");
            break;
        case (prefix +"add") :
            con("Add");
            message.delete(message.author);
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            search(link, opts, function(err, results) {
                if(err) return con(err);
                for (var y = 0; results[y].kind == 'youtube#channel'; y++);
                message.channel.sendMessage(results[y].link);
                music.setTabEnd(results[y].link);
            });
            break;
        case (prefix +"link") :
            con("Link");
            message.delete(message.author);
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            con(link);
            music.setTabEnd(link);
            break;
        case (prefix +"volume") :
            con("Volume");
            message.delete(message.author);
            var link = message.content.split(' ');
            link.shift();
            link = link.join(' ');
            music.volume(link/100);
            message.reply("le volume est maintenant à : " + link);
            break;
        case (prefix +"next") :
            con("Next");
            message.delete(message.author);
            if (music.getI() < music.getLengthTab()) music.setI(this.i + 1);
            if (music.getI() >= music.getLengthTab()) music.setI(0);
            music.next();
            break;
});
bot.login(process.env.TOKEN);

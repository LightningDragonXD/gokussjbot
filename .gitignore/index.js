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
  }else if (message.content === (prefix +"say")){
    message.delete(message.author);
    var say = message.content.substr(5);
    message.reply(say);
}if(message.content === (prefix+"XD")){
  var mentionxd = message.mentions.users.first();
  if(mentionxd){
    var r = Math.floor(Math.random()*phrase.length);
     return message.channel.sendMessage(phrase[r]);
  }
   
}
if(message.content === (prefix+"like")){
  var mentionlike = message.mentions.users.first();
  if(mentionlike){
    message.channel.sendMessage("Je t'aime bien, t'es sympas :smile:");
    return message.channel.sendFile("image/pouce.gif");
  }
}
if(message.content === (prefix+"byebye")){
  message.channel.sendMessage("Au revoir tout le monde ! :smile:");
  return message.channel.sendFile("image/bye.gif");
}
var coup = ["image/guildarts.gif","image/punch1.gif","image/punch2.gif"];
if(message.content === (prefix+"coup")){
  var mentionc = message.mentions.users.first();
  if(mentionc){
    var randomcoup = Math.floor(Math.random()*coup.length);
    message.channel.sendMessage("Prend ça !");
    return message.channel.sendFile(coup[randomcoup]);

  }
}
var blood = ["image/sang.gif","image/sang1.gif"];
if(message.content === (prefix+"blood")){
  var mentionblood = message.mentions.users.first();
  if(mentionblood){
    message.channel.sendMessage("Je vais boire ton sang ! :3");
    var randomblood = Math.floor(Math.random()*blood.length);
    return message.channel.sendFile(blood[randomblood]);
  }
}
if(message.content === (prefix+"Kamehameha")){
  var mentionc1 = message.mentions.users.first();
  if(mentionc1){
    message.channel.sendMessage("KAMEHAMEHAAAAAA !");
    return message.channel.sendFile("image/kamehameha.gif");
  }
}
if(message.content === (prefix+"ichigoGT")){
  var mentionc2 = message.mentions.users.first();
  if(mentionc2){
    message.channel.sendMessage("GETSUGA TENSHOOOO !");
    return message.channel.sendFile("image/ichigo.gif");
  }
}
var image = ["image/hug.gif","image/hug1.gif","image/hug3.gif","image/hug4.gif"];
if(message.content === (prefix+"hug")){
  var mentionc3 = message.mentions.users.first();
  if(mentionc3){
    message.channel.sendMessage("Gros calin :)!");
    var r1 = Math.floor(Math.random()*image.length);
    return message.channel.sendFile(image[r1]);
  }
}
var colere = ["image/colere.gif","image/colere2.gif","image/colere3.gif","image/colere4.gif"];
if(message.content === (prefix+"colere")){
  var mentionc4 = message.mentions.users.first();
  if(mentionc4){
    message.channel.sendMessage("je vais te tuer !x)");
    var randomc = Math.floor(Math.random()*colere.length);
    return message.channel.sendFile(colere[randomc]);
  }
}
var gilbert = ["image/gilbert1.gif"];
if(message.content === (prefix+"Gilbert")){
  var mentionc3 = message.mentions.users.first();
  if(mentionc3){
    message.channel.sendMessage("GILBERT ON T'AIME !");
    var r3 = Math.floor(Math.random()*gilbert.length);
    return message.channel.sendFile(gilbert[r3]);
  }
}
if(message.content === (prefix+"bouh")){
  var mentionb = message.mentions.users.first();
  if(mentionb){
    message.channel.sendMessage("BOOUUUUUUUUUUUUUUUH :(");
    return message.channel.sendFile("image/bouh.gif");
  }
}
var black = ["image/black.gif","image/black2.gif","image/black3.gif"];
if(message.content === (prefix+"black goku")){
    message.channel.sendMessage("BADASS !");
    var rand = Math.floor(Math.random()*black.length);
    return message.channel.sendFile(black[rand]);
  
}
var kiss = ["image/sao.gif","image/kiss.gif","image/kiss1.gif"];
if(message.content === (prefix+"kiss")){
  var mentionc3 = message.mentions.users.first();
  if(mentionc3){
    message.channel.sendMessage("bisouuuuuuu :*!");
    var r2 = Math.floor(Math.random()*kiss.length);
    return message.channel.sendFile(kiss[r2]);
  }
}
var philo = ["Le secret du bonheur en amour, ce n'est pas d'être aveugle mais de savoir fermer les yeux quand il le faut.","Le bonheur ne s'acquiert pas, il ne réside pas dans les apparences, chacun d'entre nous le construit à chaque instant de sa vie avec son coeur.","Si la vertu ne suffit pas à assurer le bonheur, la méchanceté suffit à rendre malheureux."];
var triste = ["image/triste.gif","image/triste2.gif","image/triste3.gif"];
if(message.content === (prefix+"triste")){
  message.channel.sendMessage(":cry:");
  var prandom = Math.floor(Math.random()*philo.length);
  message.channel.sendMessage(philo[prandom]);
  var random = Math.floor(Math.random()*triste.length);
  return message.channel.sendFile(triste[random]);
}
if(message.content === (prefix+"Fusion")){
  var mentionfu = message.mentions.users.first();
  if(mentionfu){
    message.channel.sendMessage("FU-SION-HA!");
    return message.channel.sendFile("image/fusion.gif");
  }
}

if(message.content === (prefix+"help")){
  return message.channel.sendMessage("",{embed: {
    titre: "Commandes",
    color: 0xE46525,
    description: "Afficher des infos: !info (pseudo)\nAjouter des musiques: !add (titre de musique)\nLancer/Arrêter la musique: !play/!stop\nCâlin: !hug pseudo\nBisou: !kiss pseudo\nCoup de poing: !coup pseudo\nKamehameha: !Kamehameha pseudo\nAppeler Gilbert Montagné: !Gilbert pseudo\nIchigo: !ichigoGT pseudo\nLa météo: !méteo Lieu\nRecherche Youtube: !youtube nom\nRecherche Wikipédia: !wiki recherche\nMute: !mute pseudo\nKick: !kick pseudo\nBan: !ban pseudo\nHuer une personne: !bouh pseudo\nPlaisanter sur quelqu'un: !XD pseudo\nDire aurevoir: !byebye\nDire bonjour: !bonjour\nPleurer: !triste\nAppeler Black Goku: !black goku\nFusionner: !Fusion pseudo\nEffacer les messages: !clear nombreMsgASuppr\nEn colère: !colere pseudo\nDire que quelqu'un est sympas: !like pseudo",
    footer:{
      text: "Message par Goku"
    }
    }});
}
});
bot.login(process.env.TOKEN);

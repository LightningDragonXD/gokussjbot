const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
const prefix = "&";
bot.on('ready', function(){
  bot.user.setGame("DBZ, &help");
});

var phrase = ["Tu pues du cul !","Tu es un trans ? :joy:","Askip tu as un pc en carton :yum:","Si y a ton ex qui te dit : tu retrouvera jamais quelqu'un comme moi . dit lui : heureusement","T'es comme France 2 personne te regarde.","Tu ne m'arrives pas à la cheville mais si un jour tu l'atteints, soit gentil(le) et fais moi mes lacets.","Commence par t'occuper de ton cul, au vue de la superficie cela devrait t'occuper pour longtemps !","-Tu sais ce qui est bien chez toi?\n-Nan\n-Bah moi non plus","- Tu viens à ma soirée fruits de mer et poissons ?\n- Oui avec plaisir\n- Tant mieux j'avais besoin d'un thon","Ta bouche c'est comme une porte, ça se ferme!" ];
function sendError(message, description){
   var embed = new Discord.RichEmbed()
            .setColor("#FE0000")
            .setDescription(':x: '+ description)
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
  message.channel.sendEmbed(embed);
}
//liste de commandes
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
            .addField("Commandes Fun", "`XD`, `hug`, `punch`, `like`, `psycho`, `sad`, `kiss`, `angry`,`food`,`boom`, `disparition`,`USOS`")
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp() 
            .setColor("#0155FE")
       message.channel.sendEmbed(embed);
      }else{
        sendError(message,"Erreur, problèmes dans les paramètres.");
      }
    }
  
    //bot musique

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
  var coup = ["https://i.imgur.com/1p128KA.gif","https://i.imgur.com/A5WGQI3.gif","https://i.imgur.com/rak3nEw.gif","https://i.imgur.com/0h9LpJm.gif","https://i.imgur.com/oLrl3ys.gif","https://i.imgur.com/pudoR63.gif"];
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
    var like = ["https://media.giphy.com/media/hOVjFUBGhYoCY/giphy.gif","https://imgur.com/Ro6K1b7.gif"];
  if(splitM[0] === (prefix+"like")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){     
            var r = Math.floor(Math.random()*like.length);
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" aime bien "+membre+" :smile:. Tu seras un(e) très bon(ne) ami(e)")
                .setImage(like[r])
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
                .setDescription(message.author.toString()+" fait pleurer "+membre+" ! :sob:")
                .setImage(triste[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#01FE7F")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
      var kiss = ["https://i.imgur.com/LhTCe1J.gif","https://i.imgur.com/OAD1UH7.gif","https://i.imgur.com/dqd4b3w.gif"];
    if(splitM[0] === (prefix+"kiss")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*kiss.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" embrasse tendrement "+membre+" ! :heart:")
                .setImage(kiss[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#FE0166")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
       var angry = ["https://i.imgur.com/HBF4OxN.gif","https://i.imgur.com/jDn8qTe.gif","https://i.imgur.com/2YuwEtl.gif","https://i.imgur.com/yXhfyl2.gif"];
    if(splitM[0] === (prefix+"angry")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*angry.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" a été mis en colère par "+membre+" ! :angry:")
                .setImage(angry[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#FE0000")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
    var bouffe = ["https://media1.tenor.com/images/9dd7ce7b03318b1128fbc3db20b39e12/tenor.gif?itemid=7677147","https://media1.tenor.com/images/8204afac2ff2506dd8b9249091e4fe3e/tenor.gif?itemid=4567076","http://ekladata.com/8B0pEoNzYrBfBC19aoeyR2B2FBU.gif","https://i.imgur.com/WUHrVOn.gif"];
    if(splitM[0] === (prefix+"food")){
       if(splitM.length === 2){
          let membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*bouffe.length);      
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+" donne faim à "+membre+" ! Oh mon dieu même moi j'ai faim ! :yum:")
                .setImage(bouffe[r])
                .setFooter('Créer par Goku(Dédi à Claire XD)', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#40A497")
            message.channel.sendEmbed(embed);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
    if(splitM[0] === (prefix+"boom")){
       if(splitM.length === 1){     
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription("BOOM ! APPARITION !")
                .setImage("https://i.imgur.com/eQwP4M7.gif")
                .setFooter('Créer par Goku(Dédi à Claire XD)', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#40A497")
            message.channel.sendEmbed(embed);
          
       }else {
          sendError(message,"Erreur, problèmes de paramètres");
       }
  }
  if(splitM[0] === (prefix+"disparition")){
       if(splitM.length === 1){     
            var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription("ABRACADABRA !")
                .setImage("https://i.imgur.com/ez2Lk0r.gif")
                .setFooter('Créer par Goku(Dédi à Claire XD)', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#40A497")
            message.channel.sendEmbed(embed);
          
       }else {
          sendError(message,"Erreur, problèmes de paramètres");
       }
  }
    if(splitM[0] === (prefix+"USOS")){
       if(splitM.length === 2){     
            var embed = new Discord.RichEmbed();
                embed.setAuthor('ALL MIGHT', 'https://i.imgur.com/qDTIwqD.png')
                .setDescription("ADIEUUUUX ! UNITED STATES OF SMAAAAAAAASH !")
                .setImage("https://i.imgur.com/og9WuUX.gif")
                .setFooter('Créer par ALL MIGHT', 'https://i.imgur.com/qDTIwqD.png')     
                .setTimestamp()
                .setColor("#40A497")
            message.channel.sendEmbed(embed);
          
       }else {
          sendError(message,"Erreur, problèmes de paramètres");
       }
  }
}
  //jeux de mots
  var rep = ["je joue","je parle","j'écoute de la musique","je regarde un anime"];
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
  var reveille = ["https://i.imgur.com/6XWJUPl.gif","https://i.imgur.com/Khl3DLb.gif","https://i.imgur.com/H67C3jV.gif"];
  if(message.content === "bonjour"){
        var r = Math.floor(Math.random()*reveille.length);
        var embed = new Discord.RichEmbed();
                embed.setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
                .setDescription(message.author.toString()+"Bonjour à toi :smile:")
                .setImage(reveille[r])
                .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
                .setTimestamp()
                .setColor("#6600FE")
         return message.channel.sendEmbed(embed);
   }
  if(message.content === "ca va"){
        return message.reply('Oui et toi ? ');

   }
  if(message.content === "oui"){
           return message.reply('Tant mieux :blush: ');
   }
  if(message.content === "tu fais quoi"){
          return message.reply('Je joue à Dragon Ball Z, Vegeta est trop fort au jeu et toi ? ');
   }
  if(message.content === rep[0] || message.content === rep[1] || message.content === rep[2] || message.content === rep[3]){
        return message.reply('Cool :blush:');
   }
  if(message.content === "rien"){
    return message.reply('Entraîne-toi avec moi, je cherche un adversaire :smile: ');
       
   }
});
  bot.on('guildMemberAdd', member =>{
    member.guild.channels.find("name", "general").send(`La cavalerie est là ! Voilà **${member.user.username}** !`)
    member.createDM().then(function(channel){  
      var embed = new Discord.RichEmbed();
            embed.setTitle('Règles du Serveur')
            .setAuthor('Goku', 'https://i.imgur.com/2vSM4o1.png')
            .setDescription('Liste des des règles à RESPECTER')
            .addField("Règles Importantes", "`RESPECTER les joueurs/joueuses`\n\n`Pas d'insultes SAUF amicales (pour jouer et avec des personnes que vous connaissez)`\n\n`Pas de spam`\n\n`Si vous avez un différent avec un autre membre, appeler un membre du Staff`\n\n`Si vous voulez régler vos problèmes tout(e) seul(e), faites le par message privé`\n\n`RESPECTER les salons`\n\n`TOUT le monde est au même niveau, donc aimez-vous les uns et les autres`\n\n`de prochaines règles seront à venir`\n\nPour non-respect des règles, vous serez SANCTIONNE !")
            .addField("Choisir sa faction Héro ou Vilain","$fc join Héro ou Vilain")
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp() 
            .setColor("#0155FE")
      channel.sendEmbed(embed);
      return 

    })
  });
  bot.on('guildMemberRemove', member =>{
    member.createDM().then(function(channel){
        return member.guild.channels.find("name", "general").send(`**${member.user.username}** est partie du serveur. Au plaisir de te revoir !`)
    })
});
bot.login(process.env.TOKEN);

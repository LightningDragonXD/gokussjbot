const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
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
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
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
        var embed = new Discord.RichEmbed()
            .setColor("#01FE23")
            .setDescription('Oui et toi ? '+message.author.toString())
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
        message.channel.sendEmbed(embed);
   }
  if(splitM[0] === (prefix+"oui")){
         var embed = new Discord.RichEmbed()
            .setColor("#01FE23")
            .setDescription('Tant mieux :blush: '+message.author.toString())
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
        message.channel.sendEmbed(embed);
   }
  if(splitM[0] === (prefix+"tu fais quoi ?")){
         var embed = new Discord.RichEmbed()
            .setColor("#01FE23")
            .setDescription('Je joue à Dragon Ball Z, Vegeta est trop fort au jeu et toi ? '+message.author.toString())
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
        message.channel.sendEmbed(embed);
   }
  if(splitM[0] === (prefix+rep[0]) || splitM[0] === (prefix+rep[1]) || splitM[0] === (prefix+rep[2]) || splitM[0] === (prefix+rep[3])){
         var embed = new Discord.RichEmbed()
            .setColor("#01FE23")
            .setDescription('Cool :blush: '+message.author.toString())
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
        message.channel.sendEmbed(embed);
   }
  if(splitM[0] === (prefix+"rien")){
         var embed = new Discord.RichEmbed()
            .setColor("#01FE23")
            .setDescription('Entraîne-toi avec moi, je cherche un adversaire :smile: '+message.author.toString())
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setTimestamp()
        message.channel.sendEmbed(embed);
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

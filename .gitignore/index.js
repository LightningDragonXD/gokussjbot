const Discord = require('discord.js');
const bot = new Discord.Client();
var mention = "<@401421641097412608>";
const prefix = "&";
bot.on('ready', function(){
  bot.user.setGame("DBZ, &help");
});
var re = ["nard","quin","pas","passage","tard","bond","naud","mise","belle","bique","tour"];
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
            .addField("Commandes Fun", "`XD`, `hug`,`punch`")
            .setFooter('Créer par Goku', 'https://i.imgur.com/2vSM4o1.png')     
            .setColor("#0155FE")
       message.channel.sendEmbed(embed);
    }else{
        sendError(message,"Erreur, problèmes dans les paramètres.");
    }
  }
  if(splitM[0] === (prefix+'bonjour')){
      message.reply("Bonjour à toi");
        var reveille = ["image/bonjour.gif","image/bonjour2.gif","image/bonjour3.gif"];
        var randomr = Math.floor(Math.random()*reveille.length);
        return message.channel.sendFile(reveille[randomr]);
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
  if(splitM[0] === (prefix+"punch")){
    var coup = ["image/guildarts.gif","image/punch1.gif","image/punch2.gif"];
       if(splitM.length === 2){
          const membre = message.guild.member(message.mentions.users.first());
          if(membre){
            var r = Math.floor(Math.random()*r.length);      
            message.channel.sendMessage("**${user}** te donne un sacré coup de poing ! :choqu:");
            return message.channel.sendFile(coup[r]);
          }
       }else {
          sendError(message,"Erreur, problèmes de mentions");
       }
  }
  
}
  //jeux de mots
if(message.content === "re" || message.content === "Re"){
     var r = Math.floor(Math.random()*re.length);
     return message.channel.sendMessage(re[r]);
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

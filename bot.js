const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.on('message', message => {
if (message.content.startsWith(prefix + 'help')) { 
    let pages = [`**
        ***__LD SHOP__***
**
╔═══════════۩۩═══════════╗

بــائــع = حــســابــات

الامـــر = Accounts

رتــب = @♵  𝓥𝓔𝓝𝓓𝓞𝓡 𝓐𝓒𝓒𝓞𝓤𝓝𝓣𝓢

شــات = #vendor-accounts 
	
╚═══════════۩۩═══════════╝


╔═══════════۩۩═══════════╗

بــائــع = بــوتــات

الامـــر = Bot

رتــب = @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓑𝓞𝓣 

شــات = #vendor-bot 
	
╚═══════════۩۩═══════════╝
**
  `
,`
        ***__LD SHOP__***
**
╔═══════════۩۩═══════════╗

بــائــع = ســيــرفــرات

الامـــر = Servers

رتــب = @♳ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓢𝓔𝓡𝓥𝓔𝓡𝓢 

شــات = #vendor-servers 
	
╚═══════════۩۩═══════════╝


╔═══════════۩۩═══════════╗

بــائــع = نـــيـــتــرو

الامـــر = Nltro

رتــب = @♴ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓝𝓘𝓣𝓡𝓞

شــات = #vendor-nitro 
	
╚═══════════۩۩═══════════╝
**
   `,`
        ***__LD SHOP__***
**

╔═══════════۩۩═══════════╗

بــائــع = تــــاق

الامـــر = hanker

رتــب = @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓗𝓐𝓝𝓚𝓔𝓡

شــات = #vendor-hanker 
	
╚═══════════۩۩═══════════╝


╔═══════════۩۩═══════════╗

بــائــع = صــور تـصــيــصــم

الامـــر = photoshop

رتــب = @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓓𝓔𝓢𝓘𝓖𝓝𝓔𝓡

شــات = #vendor-photoshop 
	
╚═══════════۩۩═══════════╝
**
        ***__قــانــون الـبـائـعـين__***
 **       

1- عــدام تـسـوى اوامــر كــل شــوى
2- عــدام نــشــره شــى خــربـان وغـيـر مـوجـد
3- عدام تــكــرار مـنـشـيـن كـل شـوى
4- عــدام نــشــره فــى شــات الـخــطــاء
5- عــدام طـلـب ســتــراجــاع شــى بــعـد بـيـبـع
6- عــدام مــنــع دخــول وســيــط
7- عــدام طــلــب وســـيــط خــارج ســيــرفـر
 
**
   
`]
    let page = 1;

    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.author.sendEmbed(embed).then(msg => {

        msg.react('⏮').then( r => {
            msg.react('⏭')


        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏮' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏭' && user.id === message.author.id;


        const backwards = msg.createReactionCollector(backwardsFilter, { time: 2000000});
        const forwards = msg.createReactionCollector(forwardsFilter, { time: 2000000});



        backwards.on('collect', r => {
            if (page === 1) return;
            page--;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        forwards.on('collect', r => {
            if (page === pages.length) return;
      
      page++;
            embed.setDescription(pages[page-1]);
            embed.setFooter(`Page ${page} of ${pages.length}`);
            msg.edit(embed)
        })
        })
    })
    }
}); 

client.on("message",async message => {
if(message.content === 'Accounts'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♵  𝓥𝓔𝓝𝓓𝓞𝓡 𝓐𝓒𝓒𝓞𝓤𝓝𝓣𝓢");
      if(!staff) return message.reply(`**  لــسه مـعاك رتــب @♵  𝓥𝓔𝓝𝓓𝓞𝓡 𝓐𝓒𝓒𝓞𝓤𝓝𝓣𝓢**`)
var shopc = message.guild.channels.find("name","vendor-accounts")
  if(!shopc) return message.reply("**ايــوجـد شــات بـاســم #vendor-accounts**")
    let Accounts = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("** اكـــتــب نــواع حــســاب **:pencil2: ").then(e => {
           message.channel.awaitMessages(fillter, { time: 900000, max: 1                                    
})
     .then(co => {
       Accounts = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("****:moneybag:اكـــــتـــب ســعــراء حــســاب بــارقــم فـقـط**:pencil2: ").then(e => {
  message.channel.awaitMessages(fillter, { time: 90000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__وصـــف حــســاب__**:bookmark:  
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            ** ${Accounts} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســـعــراء حــســاب__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'Bot'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓑𝓞𝓣");
      if(!staff) return message.reply(`** لــسه مـعاك رتـب @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓑𝓞𝓣  **`)
var shopc = message.guild.channels.find("name","vendor-bot")
  if(!shopc) return message.reply("**لأيـوجـد شــات بـاسـم #vendor-bot**")
    let Bot = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("**اكـــتــب نــواع بـــوت**:pencil2:").then(e => {
           message.channel.awaitMessages(fillter, { time: 900000, max: 1                                    
})
     .then(co => {
       Bot = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("**:moneybag:اكـــتـــب ســعــراء بـــوت بــارقــم فــقــط**:pencil2:").then(e => {
  message.channel.awaitMessages(fillter, { time: 90000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__ شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__وصـــــف بــــوت__**:bookmark:  
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            ** ${Bot} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســـعــراء بــــوت__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'Nltro'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♴ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓝𝓘𝓣𝓡𝓞");
      if(!staff) return message.reply(`** لـسه مـعاك رتـب @♴ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓝𝓘𝓣𝓡𝓞 **`)
var shopc = message.guild.channels.find("name","vendor-nitro")
  if(!shopc) return message.reply("**لأيـوجـد شــات بـاسـم #vendor-nitro **")
    let Nltro = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("** أكـــتـــب فــتـره نــيــتـرو **:pencil2: ").then(e => {
           message.channel.awaitMessages(fillter, { time: 900000, max: 1                                    
})
     .then(co => {
       Nltro = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("**:moneybag:اكـــتـــب ســعــراء نــتــيــرو**:pencil2:").then(e => {
  message.channel.awaitMessages(fillter, { time: 90000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__فــــتــره نــتــيــرو__**
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            ** ${Nltro} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســـعــراء نـــتــيــرو__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'hanker'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓗𝓐𝓝𝓚𝓔𝓡");
      if(!staff) return message.reply(`** لـسه مـعاك رتـب @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓗𝓐𝓝𝓚𝓔𝓡 **`)
var shopc = message.guild.channels.find("name","vendor-hanker")
  if(!shopc) return message.reply("** لأيـوجـد شـات بـاسـم #vendor-hanker **")
    let hanker = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("** أكـــــتـــب رقـــم تـــاق **:pencil2: ").then(e => {
           message.channel.awaitMessages(fillter, { time: 900000, max: 1                                    
})
     .then(co => {
       hanker = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("**:moneybag:اكــــتــــب ســـعــراء تــاق**:pencil2:").then(e => {
  message.channel.awaitMessages(fillter, { time: 90000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__رقــــم تـــاق__**
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            ** ${hanker} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســــعــراء تـــاق__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'Servers'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♳ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓢𝓔𝓡𝓥𝓔𝓡𝓢");
      if(!staff) return message.reply(`**لـسه مـعاك رتـب @♳ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓢𝓔𝓡𝓥𝓔𝓡𝓢 **`)
var shopc = message.guild.channels.find("name","vendor-servers")
  if(!shopc) return message.reply("** لا لأيـوجـد شـات بـاســم #vendor-servers**")
    let Servers = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("**:busts_in_silhouette:اكـــــتـــب عــداد عــضــاء ســيــرفــر**:pencil2:").then(e => {
           message.channel.awaitMessages(fillter, { time: 90000, max: 1                                    
})
     .then(co => {
       Servers = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("**:moneybag:اكــــتـــب ســـعــــراء ســيــرفــر**:pencil2:").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__عـــداد عــضــاء ســيرفـر__**
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            ** ${Servers} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســـعــراء ســيــرفــر__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on("message",async message => {
if(message.content === 'photoshop'){//الامر
let staff = message.guild.member(message.author).roles.find('name' ,"♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓓𝓔𝓢𝓘𝓖𝓝𝓔𝓡");
      if(!staff) return message.reply(`**لـسه مـعاك رتـب @♶ 𝓥𝓔𝓝𝓓𝓞𝓡 𝓓𝓔𝓢𝓘𝓖𝓝𝓔𝓡**`)
var shopc = message.guild.channels.find("name","vendor-photoshop")
  if(!shopc) return message.reply("**لا لأيـوجـد شـات بـاســم #vendor-photoshop**")
    let photoshop = '';
      let fillter = m => m.author.id === message.author.id
      
     

      await message.channel.send("**اكـــتـــب نــواع تــصـــيــصــم**:pencil2:").then(e => {
           message.channel.awaitMessages(fillter, { time: 90000, max: 1                                    
})
     .then(co => {
       photoshop = co.first().content;
        co.first().delete();
     
let desc = '';
        
e.edit("**:moneybag:اكـــتـــب ســـعــراء تــصــيــصـم**:pencil2:").then(e => {
  message.channel.awaitMessages(fillter, { time: 60000, max: 1 })

     .then(co => {
       desc = co.first().content;
        co.first().delete();
e.edit("**__تــم نــشــره__:white_check_mark:**").then(e => {
  shopc.send(`╔════════════════════════════════════╗
║                   ***__شـــــوب ${message.guild.name} ســـيــرفـــر__***
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__نـــواع تــصــيــصــم__**
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ 
║            **  ${photoshop} **
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__ســـعــراء تــصـــيــصــم__**:moneybag:
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║
║                                           [**__كـــريــدت__ : ${desc} الــف**]
║
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║**__تــم رســـال بــواســـطــه__:bust_in_silhouette:** : ${message.author}
║▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
║ || @everyone  @here || 
╚════════════════════════════════════╝`)
  })
})
  })
})
  })
           
      
  
     
  
      
           
}
});

client.on('message', msg => {
    if (msg.content === '$help') {
      msg.reply('**__تـــم رســـال اوامـــر فــى الــخـاص__** :white_check_mark:');
    }
  });

const adminprefix = "$";
const devs = ['564414567946387487','532592989789487104']
client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!devs.includes(message.author.id)) return;
   
if (message.content.startsWith(adminprefix + 'setgame')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر بـلانـيـق الـى:large_blue_circle:**`)
} else
  if (message.content.startsWith(adminprefix + 'setname')) {
client.user.setUsername(argresult).then
    message.channel.sendMessage(`**__${argresult}__تـم تـغـيـر اســم الـى**:pencil:`)
return message.reply("**لايـمـكـن تـغـيـر اسـم الان نـتـظـار سـاعـتـان**:stopwatch: ");
} else
  if (message.content.startsWith(adminprefix + 'setavatar')) {
client.user.setAvatar(argresult);
  message.channel.sendMessage(`**__${argresult}__تــم تــغـيــر صــور الـى :camera_with_flash:**`);
      } else    
if (message.content.startsWith(adminprefix + 'setT')) {
  client.user.setGame(argresult, "https://www.twitch.tv/idk");
    message.channel.sendMessage(`**__${argresult}__ تــم تـغــيــر حــالـه الــى :red_circle:**`)
}
});

client.on("message", async message => {
    if(message.content.startsWith(prefix + "Ex")) {
        let Ex = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setThumbnail(message.author.avatarURL)
            .setDescription(`**__اوامـــر تــغـيـر احـلات بـوت + صـور + اسـم__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			***
			1-${prefix}setgame = الى تـغـيـر حـالـه الـى بـلانـيـق [ :large_blue_circle: ]
			
			2-${prefix}setT = الـى تـغـيـر حـالـه الــى تـويـتـش [ :red_circle: ]
			
			3-${prefix}setavatar = الـى تـغـيـر صـور [ :camera_with_flash: ]
			
			4-${prefix}setname = الـى تـغـيـر اسـم [ :pencil: ]
			***
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			**__مـسـوالـيـن تـغـيـر__**
			▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
			1-! ➹⎛ トゥルキパシャ ⎞♔ ❥ 
			2-Mr!Zeꙃo`);
            message.channel.sendEmbed(Ex);
    }
});

        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-accounts", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تــم نــشــاء روم الـبـائـعـيـن **")
            }
            })
			
			        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-bot", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تـم نـشـاء روم الـبـائـعـيـن **")
            }
            })
			
			        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-servers", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تـم نـشـاء روم الـبـائعـيـن **")
            }
            })
			
			        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-nitro", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تـم نـشـاء روم الـبـائعـيـن **")
            }
            })
			
			        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-hanker", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تـم نـشـاء روم الـبـائـعـيـن **")
            }
            })
			
			        client.on('message', message=>{
            if(message.content.startsWith("$رومات")) {
            if(!message.channel.guild) return;
                if(message.author.bot) return;
                if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply("**تحتاج الى `MANAGE_CHANNELS`**");
                message.guild.createChannel("vendor-photoshop", "text").then(c =>{
                    c.overwritePermissions(message.guild.id, {
                        SEND_MESSAGES: false
 
                          })
                })
    message.channel.send("**✅ تـم نـشـاء روم الـبـائـعـيـن **")
            }
            })

client.login(process.env.BOT_TOKEN);

const Discord = require('discord.js');
const bot = new Discord.Client({DisableEveryone: true});

bot.on('ready', asycn () =>{
  bot.user.setActivity('bot. BOnjour!');
});

bot.login(process.env.Bot_Token)

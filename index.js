require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});

client.on('ready', ()=> {
    console.log('Estoy listo!');
    client.application.commands.set([
        {
            name: 'ping',
            description: 'Pong',
            options: [],
        }
    ])
})

client.on('interactionCreate', (int) => {
    if(int.isCommand() && int.commandName === 'ping'){
        int.reply('pong');
    }
})

client.login(process.env.BOT_TOKEN);
require('http').createServer((req, res) => res.end('hola')).listen();

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client({intents: 32767});
const fs = require('fs');
const path = require('path');

const dirEvents = fs.readdirSync(path.join(__dirname, 'events'));

for(let fileEvent of dirEvents){
  const event = require(path.join(__dirname, 'events', fileEvent));
  client.on(event.name, (...args) => event.run(client, ...args));
}

client.on('interactionCreate', (int) => {
    if(int.isCommand() && int.commandName === 'ping'){
        int.reply('pong');
    }

  if(int.isCommand() && int.commandName === 'saludo') {
  const usuario = int.options.getUser('usuario');

  int.reply(`${usuario.username} es gay`);
}
})



client.login(process.env.BOT_TOKEN);
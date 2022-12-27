require('http').createServer((req, res) => res.end('hola')).listen();
require("dotenv").config();
const Discord = require('discord.js');
const client = new Discord.Client({intents: GatewayIntentBits.Guilds});



client.login(process.env.BOT_TOKEN);
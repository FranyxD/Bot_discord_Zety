const Discord = require('discord.js');
module.exports = {
  name: 'embed',
  description: 'Crear embed',
  options: [],
  run: async (client, int) => {
    const Embed = new Discord.EmbedBuilder()
    .setAuthor({name: 'By FranyxD', iconURL: client.user.displayAvatarURL()})
    .setTitle('TuRespawn')
    .setURL('https://turespawn.com/')
    .setThumbnail(client.user.displayAvatarURL())
    .setDescription('Pagina web comunidad videojuegos')
    .addFields([
      // se pueden agregar hasta 25
      {
        name: 'field1', value: 'valor del campo1'
      },
      {
        name: 'field2', value: 'valor del campo2'
      }
    ])
    .setImage(client.user.displayAvatarURL())
    .setColor('#F0F1AA')
    .setFooter({text: 'Esto es el footer del embed', iconURL: client.user.displayAvatarURL()})
    .setTimestamp() //puedes poner fechas personalizadas con la clase Date
    int.reply({embeds: [Embed]});
  }
}
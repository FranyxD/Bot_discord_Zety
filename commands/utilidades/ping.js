module.exports = {
  name: 'ping',
  description: 'Mira mi velocidad de respuesta',
  options: [],
  run: async(client, int) => {
    int.reply({
      content: 'Analizando',
      fetchReply: true
    }).then((mensaje) => mensaje.edit(`Ping: \`${Date.now() - mensaje.createdTimestamp}ms\``))
  }
}
module.exports = {
  name: 'interactionCreate',
  run: (client, int) => {
    if(int.isCommand()){
      const command = client.commands.get(int.commandName);
      if(!command) return;

      command.run(client, int);
    }
  }
}
module.exports = {
  name: 'ready',
  run: (client) => {
    console.log('Im ready')
     client.application.commands.set([
        {
            name: 'ping',
            description: 'Pong',
            options: [],
        },
       {
         name: 'saludo',
         description: 'Saludos cabron',
         options: [
           {
             type: 6,
             name: 'usuario',
             description: 'El usuario que desea saludar',
            required: true
           }
         ]
       }
    ])
  }
}
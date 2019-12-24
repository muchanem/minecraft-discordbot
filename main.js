
const fetch = require('node-fetch');
const Discord = require('discord.js')
const dotenv = require('dotenv')
dotenv.config();
const client = new Discord.Client()
const token = process.env.DISCORD_BOT_SECRET

client.on('ready', () => {
  console.log('discordbot logged in')
  console.log(client.user.username)
})


client.on('message', msg => {

  if (msg.author.id != client.user.id) {
      // msg.channel.send(msg.content.split('').reverse().join(''))
      // msg.channel.send(Date())
       if (msg.content == '!status') {
        const get = async () => {
          const response = await fetch('https://mcapi.us/server/status?ip=mc.pztron.io');
          const myJson = await response.json();
          const embed = new Discord.RichEmbed()
            .setTitle('status')
            .setURL('https://mcapi.us/server/status?ip=mc.pztron.io') 
            .setColor(0x8d6c9f)
            .setThumbnail('https://unitcircle.tk/assets/minecrafticon.png') 
            .addField('Status', myJson['online'] ? 'Online' : 'Offline')
            .addField('Players', myJson['players']['now']+'/'+myJson['players']['max'])
            .addField('Version', myJson['server']['name'])
            .setTimestamp(Date())
          msg.channel.send(embed)
        }
        get()

       }
    }
    

})

client.login(token)

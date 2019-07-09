// discordbot code here

const Discord = require('discord.js')
const dotenv = require('dotenv');
dotenv.config();
const client = new Discord.Client()
const token = process.env.DISCORD_BOT_SECRET

client.on('ready', () => {
  console.log('discordbot logged in')
  console.log(client.user.username)
})


client.on('message', msg => {
  
  /*  if (msg.author.id != client.user.id) {
        msg.channel.send(msg.content.split('').reverse().join(''))
    }
    if (msg.content == '!')
    */
})

client.login(token)
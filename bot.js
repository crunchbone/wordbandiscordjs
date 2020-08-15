const Discord = require('discord.js');
const client = new Discord.Client();



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on('message', message => {
  if (message.content.toLowerCase().includes('anger')) {
    message.delete()
  }
});


client.login('NzQzOTY4NTY5NjExNTE4MDI4.XzcYuQ.plPGaCS_K9n2qEyN1AkY47siMXA');

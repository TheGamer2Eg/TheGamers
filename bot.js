const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("689960470026780702")
setInterval(function() {
channel.send(`Ez`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
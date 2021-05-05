const Discord = require("discord.js");
const config = require('./config.json');

const client = new Discord.Client();



client.on('ready', () => {
    console.log("We have logged in as Rogerio.");
})


client.on('message', message => {
    if (message.content == '!user-info') {
        message.channel.send(`Seu username: ${message.author.username}\nSeu ID: ${message.author.id}`);
    }
    if (message.content == '!ping') {
        message.channel.send("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    }
    if (message.content == '!vlw') {
        message.react('😎');
        message.reply(`Tmj`);
    }
});
client.login(config.token);
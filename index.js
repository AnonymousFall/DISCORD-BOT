const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

const allowedCommands = ["ping", "yt", "greet", "clear", "kick", "ban", "yeezy", "test" , "help" , "userbad", "unban", "spooky" , "mis" ];

var prefix = '?';
var member;
var user;
var muteuser;


bot.commands = new Discord.Collection();

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
    console.log(command.name);
}


bot.on('ready', () => {
    console.log('This bot is online!')
})

bot.on('message', async msg => {
    // Asks for the prefix responds with the prefix, this won't work if you place it further down the method
    if(msg.content.toLowerCase() === "what is your prefix"){
        msg.channel.send('My Prefix is: ' + prefix); 
    }
    
    // If the message does not start with your prefix or the bot is the message author then don't react to the message
    if( !msg.content.startsWith(prefix) || msg.author.bot) return;

    // Creates an array variable called args (short for arguments) from the message content after the prefix, splitting each word around spaces
    // e.g. "?ping spiderman thor antman" would return an array of "ping","spiderman","thor","antman"
    const args = msg.content.slice(prefix.length).split(/ +/);

    // removes the first item from the array called args and assigns it to command
    // so in this case "?ping spiderman thor antman" command would now be "ping" and args would now be an array of "spiderman","thor","antman"
    const command = args.shift().toLowerCase();

    if( allowedCommands.includes(command)) {
        if( command === "help") {
            bot.commands.get(command).execute( msg, [bot.commands, prefix])
        } else if( command === "unban") {
            try {
                bot.commands.get(command).run(bot, msg, args)
            } catch( e) {
                console.log( e.message);
            }
        } else {
            bot.commands.get(command).execute( msg, args)
        }
    }
});

bot.login(process.env.token);
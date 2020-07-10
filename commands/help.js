module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(message, args){
        message.channel.send('help ' + args);
    }
}
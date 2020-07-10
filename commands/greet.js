module.exports = {
    name: 'greet',
    description: "this is the greet command",
    execute(message, args){
        message.channel.send('Hi there ' + args);
    }
}
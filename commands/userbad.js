module.exports = {
    name: 'userbad',
    description: "this is the userbad command",
    execute(message, args){
        const user = message.mentions.users.first();
        message.reply(`${user} bad`);
        
    }
}
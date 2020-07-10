module.exports = {
    name: 'kick',
    description: "this is the kick command",
    execute(message, args){
        const user = message.mentions.users.first();
        if(user) {
            const member = message.guild.member(user);
            if (member) {
                member.kick('').then(() => {
                    message.reply(`I have smashed ${user.tag}`);
                })
                .catch(err => {
                    message.reply(`I was unable to smash ${user.tag}`);
                    console.error(err);
                })
            } else {
                message.reply("That user isn't in this server!");
            }
        } else {

            message.reply("You didn't mention a user to smash!");
            }
           
        
    }
}
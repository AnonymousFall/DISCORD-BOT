module.exports = {
    name: 'ban',
    description: "this is the ban command",
    execute(message, args){
        const user = message.mentions.users.first();
        if(user) {
            const member = message.guild.member(user);
            if (member) {
                member.ban({
                    reason: 'they were flat-earthers',
                }).then(() => {
                    message.reply(`I have kicked ${user.tag} off the edge of the earth`);
                })
                .catch(err => {
                    message.reply(`I was unable to flick ${user.tag} off the edge of the earth`);
                    console.error(err);
                })
            } else {
                message.reply("That user isn't in this server!");
            }
        } else {

            message.reply("You didn't mention a user to ban!");
            }
           
        
    }
}
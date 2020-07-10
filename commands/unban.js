module.exports = {
    name: 'unban',
    description: "this is the ban command",
    execute = async (bot , message, args) => {
 
        if(!message.member.haspermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You don't have permission to perform this command!")

        let bannedMember = await bot.fetchUser(args[0])
        if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")

        let reason = args.slice(1).join(" ")
        if(!reason)reason = "No reason given!"

        if(!message.guild.me.haspermission(["BAN_MEMBERS","ADMINISTRATOR"])) return message.channel.send("I dont have permission to perform this command")
        // message.delete()
        try {

            message.guild.unban(bannedMember,{reason: reason})
            message.channel.send(`${bannedMember.tag} has been unbanned from the server!`)
    
        } catch(e) {
            console.log(e.message)
            
        }
        
        // bannedMember.send('MESSAGE / INVITE LINK');
        //         message.guild.unban(bannedMember);


        }
    }




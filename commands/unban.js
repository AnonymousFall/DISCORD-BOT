module.exports.run = async (bot, message, args) => {

    if(!message.member.haspermission(["BAN_MEMBERS","ADMINISTRATOR"])) return message.channel.send("You don't have permission to perform this command!");

    let bannedMember = await bot.fetchUser(args[0]);
    if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!");

    let reason = args.slice(1).join(" ");
    if(!reason) reason = "no reason given";

    if(!message.guild.me.haspermission(["BAN_MEMBERS","ADMINISTRATOR"])) return message.channel.send("I don't have permission to perform this command!");

    message.delete();

    try {
        message.guild.unban(bannedMember, {reason: reason})
        message.channel.send(`${bannedMember.username.tag} has been unbanned from the server!`)
    } catch(e) {
        console.log(e.message);
    }
}

module.exports.config = {
    name: "unban",
    description: "Unban a flat earther"
}

// let embed = new Discord.RichEmbed()
// .setColor(colours.redlight)
// .setAuthor(`{message.guild.name} Modlogs`, message.guild.iconURL)
// .addField("Moderation:", "Unban")
// .addField("Moderated on:", `${bannedMember.username} (${bannedMember.id})` )
// .addField("Reason:", reason)
// .addField("Date:", message.createdAt.toLocaleString())

// let sChannel = message.guild.channels.find(c => c.name === "tut modlogs")
// sChannel.send(embed)

// }


//     name: 'unban',
//     description: "this is the unban command",
//     execute(message, args)

//     if(!msg.member.hasPermission('BAN_MEMBERS')) return;

//     let bannedMember = await bot.users.fetch(args[1]);

//     if(!bannedMember) return msg.channel.send('Please include a valid banned user');

//     msg.delete();

//     try {
//         msg.guild.members.unban(bannedMember);
//         msg.channel.send('Successfully unbanned '+`\`${bannedMember.tag}\``)
//     } catch(e) {
//         console.log(e);
// }

module.exports = {
    name: 'clear',
    description: "this is a purging command",
    execute(message, args){
        //  Checks if person has permission to manage messages
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return;
        //  Checks to make sure that there is exactly one argument  
        if(args.length != 1) return message.reply('Error! Clear requires exactly one argument, e.g. ?clear 10');
        if(args[0] > 100) return message.reply('Error! Can not clear more than 100 messages.');
        message.delete();
        message.channel.bulkDelete(args[0]);
    }
}
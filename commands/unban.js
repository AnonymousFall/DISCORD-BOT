module.exports = {
    name: 'unban',
    description: "this is the ban command",
    execute(message, args){
 

                args[0].send('MESSAGE / INVITE LINK');
                message.guild.unban(args[0]);


        }
    }




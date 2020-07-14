module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(message, args){
        const Discord = require('discord.js');

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#4d004d')
            .setTitle('Help')
            .setAuthor('Fall', 'https://pbs.twimg.com/profile_images/1275574904742506496/GnR_f3aA_400x400.jpg')
            .setDescription('Help commands for falls Discord bot')
            .setThumbnail('https://pbs.twimg.com/profile_images/1275574904742506496/GnR_f3aA_400x400.jpg')
            // .addField('Inline field title', 'Some value here', true)
            // .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Happy to help', 'https://pbs.twimg.com/profile_images/1275574904742506496/GnR_f3aA_400x400.jpg');

        args[0].forEach(element => {
            exampleEmbed.addField( args[1]+element.name, element.description, true)
        });
    message.channel.send(exampleEmbed);    }
}
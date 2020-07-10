module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(message, args){
        const Discord = require('discord.js');

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setTitle('Help')
            .setAuthor('Fall', 'https://i.imgur.com/wSTFkRM.png')
            .setDescription('Help commands for falls Discord bot')
            .setThumbnail('https://i.imgur.com/wSTFkRM.png')
            // .addField('Inline field title', 'Some value here', true)
            // .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Happy to help', 'https://i.imgur.com/wSTFkRM.png');

        args.forEach(element => {
            exampleEmbed.addField( element.name, element.description, true)
        });
    message.channel.send(exampleEmbed);    }
}
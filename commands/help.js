module.exports = {
    name: 'help',
    description: "this is the help command",
    execute(message, args){
        const Discord = require('discord.js');

        const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#78AB46')
            .setTitle('Help')
            .setAuthor('Fall', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg')
            .setDescription('Help commands for falls Discord bot')
            .setThumbnail('https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg')
            // .addField('Inline field title', 'Some value here', true)
            // .setImage('https://i.imgur.com/wSTFkRM.png')
            .setTimestamp()
            .setFooter('Happy to help', 'https://ichef.bbci.co.uk/news/976/cpsprodpb/16620/production/_91408619_55df76d5-2245-41c1-8031-07a4da3f313f.jpg');

        args[0].forEach(element => {
            exampleEmbed.addField( args[1]+element.name, element.description, true)
        });
    message.channel.send(exampleEmbed);    }
}
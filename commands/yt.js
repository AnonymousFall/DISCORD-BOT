module.exports = {
    name: 'yt',
    description: "this is the youtube command",
    execute(message, args){
        message.channel.send('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
    }
}
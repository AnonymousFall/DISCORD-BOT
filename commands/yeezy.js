module.exports = {
    name: 'yeezy',
    description: "prepare to be yeezied",
    execute(message, args){
        const yeezies = [
            "Nothing in life is promised except death.",
            "My greatest pain in life is that I will never be able to see myself perform live.",
            "We all self-conscious. I'm just the first to admit it.",
            "They say you can rap about anything except for Jesus, that means guns, sex, lies, video tapes, but if I talk about God my record won't get played Huh?",
            "My music isn’t just music — it’s medicine.",
            "This dark diction has become America's addiction.",
            "I was never really good at anything except for the ability to learn.",
            "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? 'Cause think of all the people you will please if you try.",
            "I hate the way they portray us in the media. If you see a black family it says they’re looting, if you see a white family it says they’re looking for food.",
            "George Bush doesn't care about black people."
        ]

        const quote = yeezies[ Math.floor(Math.random() * yeezies.length)];
        message.channel.send(`Prepare to be enlightened \n ${quote} \n - Yeezy`);
    }
}
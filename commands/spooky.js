module.exports = {
    name: 'spooky',
    description: "prepare to be spooked",
    execute(message, args){
        const spooked = [
            "your mum gay.",
            "execution. BEGIN!!",
            "We all self-conscious. I'm just the first to admit it.",
            "They say you can rap about anything except for Jesus, that means guns, sex, lies, video tapes, but if I talk about God my record won't get played Huh?",
            "My music isn’t just music — it’s medicine.",
            "This dark diction has become America's addiction.",
            "I was never really good at anything except for the ability to learn.",
            "People always say that you can't please everybody. I think that's a cop-out. Why not attempt it? 'Cause think of all the people you will please if you try.",
            
        ]

        const quote = yeezies[ Math.floor(Math.random() * yeezies.length)];
        message.channel.send(`Prepare to be enlightened \n ${quote} \n - Yeezy`);
    }
}
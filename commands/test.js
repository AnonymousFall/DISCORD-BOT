module.exports = {
    name: 'test',
    description: "this is a test that Heroku picks up changes from Github automatically",
    execute(message, args){
        message.channel.send('Hi, this command should have been picked up automatically by Heroku and been deployed in response to a change in Github... #nerdgasm');
    }
}
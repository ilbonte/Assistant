const botBuilder = require('claudia-bot-builder')
var parsedRequest = {}
module.exports = botBuilder((request) => {
  let response = "-"
  parsedRequest = request
  if (isBotCommand()) {
    const command = request.text.substring(1)
    switch (command) {
      case "saluta":
        response = "ciao"
        break;
      default:
        response = "comando sconoscito"
    }
  }

  return response
}, {
  platforms: ['telegram']
})

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type==="bot_command"
}
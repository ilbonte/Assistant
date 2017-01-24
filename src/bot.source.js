const botBuilder = require('claudia-bot-builder')

var parsedRequest = {}
module.exports = botBuilder(assistant, {
  platforms: ['telegram']
})
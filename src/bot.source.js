const botBuilder = require('claudia-bot-builder')

module.exports = botBuilder((request, originalApiRequest) => {
  const prettyResponse = `Here is your request: \n ${JSON.stringify(request,null, 1)}`
  return prettyResponse
},{
  platforms: ['telegram']
})

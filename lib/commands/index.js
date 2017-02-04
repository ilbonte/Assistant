const messages = require('../messages')


const commands = require("fs").readdirSync(__dirname)
  .filter( (fileName)=> fileName !== 'index.js')
  .map((fileName) => require('./'+fileName))


module.exports = (request) => {
  const command = commands.find((command) =>  command.handleRequest(request) )

  if (command == undefined) {
    const helps = commands.map((command) => command.help().join('\n')).join('\n')
    return messages.help(helps)
  }

  return command.execute(request)
}

function DebugCommand() {

  this.handleRequest = (request) => {
    return request.text == '/debug'
  }

  this.execute = (request) => {
    return __dirname
  }

  this.help = () => {
    return ["/debug - Mostra la richiesta"]
  }

}

module.exports = new DebugCommand()
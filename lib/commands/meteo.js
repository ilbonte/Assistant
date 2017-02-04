function MeteoCommand() {

  this.handleRequest = (request) => {
    return request.text == '/meteo'
  }

  this.execute = (request) => {
    return "meteo"
  }

  this.help = () => {
    return ["/meteo - Mostra meteo per trento"]
  }

}

module.exports = new MeteoCommand()
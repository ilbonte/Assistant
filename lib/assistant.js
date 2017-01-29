'use strict'

var BikeFinder = require('./BikeFinder')
var GotAdapter = require('./GotAdapter')

var parsedRequest = {}
function assistant(request) {

  parsedRequest = request
  if (isBotCommand()) {
    var command = request.text.substring(1)
    switch (command) {
      case "saluta":
        return "Ciao :) "
        break;
      case "bike":
        var bikeFinder = new BikeFinder(new GotAdapter())
        var bikeUrl = 'https://os.smartcommunitylab.it/core.mobility/bikesharing/trento'

        return bikeFinder.getData(bikeUrl).then(function () {
          return bikeFinder.getDataFor('Biblioteca - Trento').id
        })

        break;

      default:
        return "comando sconosciuto"
    }
  }

}

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type === "bot_command"
}

module.exports = assistant
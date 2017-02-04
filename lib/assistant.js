'use strict'

var BikeFinder = require('./BikeFinder')
var GotAdapter = require('./GotAdapter')

var parsedRequest = {}
function assistant(request) {

  if (isBotCommand(request)) {
    var command = request.text.substring(1)
    switch (command) {
      case "saluta":
        return "Ciao :) "
        break;
      case "time":
        return new Date().toString()
      break;
      case "debug":
        return JSON.stringify(request)
      break;
      case "bike":
        var bikeFinder = new BikeFinder(new GotAdapter())
        var bikeUrl = 'https://os.smartcommunitylab.it/core.mobility/bikesharing/trento'

        return bikeFinder.getData(bikeUrl).then(function () {
          var solution = ''
          var piscina = bikeFinder.getDataFor('Piscina - Trento')
          var santa = bikeFinder.getDataFor('Centro Santa Chiara - Trento')
          var centa = bikeFinder.getDataFor('Piazza di Centa - Trento')
          var biblio = bikeFinder.getDataFor('Biblioteca - Trento')
          var autocorriere = bikeFinder.getDataFor('Stazione Autocorriere - Trento')
          

          if(piscina.bikes>1){
            solution = 'Piscina: ' + piscina.bikes + ' bici\n'
          }else{
            solution = 'In piscina ci sono solo ' + piscina.bikes + '\n' 
            solution += 'Santa: ' + santa.bikes + '\n'
          }
          solution += '__________________\n\n'

          if(centa.slots>1){
            solution += 'Centa: ' + centa.slots + ' slots'
          }else{
            solution += 'Solt Biblioteca: ' + biblio.slots+ '\n'
            solution += 'Slot Autocorriere:' + autocorriere.slots 
          }

          return solution

        })

        break;

      default:
        return "comando sconosciuto"
    }
  }

}

function isBotCommand(request) {
  return request.originalRequest.message.entities[0].type === "bot_command"
}

module.exports = assistant
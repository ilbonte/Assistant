const BikeFinder = require("../BikeFinder")
const GotAdapter = require("../GotAdapter")

function BikeCommand() {

  this.handleRequest = (request) => {
    return request.text == '/bike'
  }

  this.execute = (request) => {
    var bikeFinder = new BikeFinder(new GotAdapter())
    var bikeUrl = 'https://os.smartcommunitylab.it/core.mobility/bikesharing/trento'

    return bikeFinder.getData(bikeUrl).then(function () {
      var solution = ''
      var piscina = bikeFinder.getDataFor('Piscina - Trento')
      var santa = bikeFinder.getDataFor('Centro Santa Chiara - Trento')
      var centa = bikeFinder.getDataFor('Piazza di Centa - Trento')
      var biblio = bikeFinder.getDataFor('Biblioteca - Trento')
      var autocorriere = bikeFinder.getDataFor('Stazione Autocorriere - Trento')


      if (piscina.bikes > 1) {
        solution = 'Piscina: ' + piscina.bikes + ' bici\n'
      } else {
        solution = 'In piscina ci sono solo ' + piscina.bikes + '\n'
        solution += 'Santa: ' + santa.bikes + '\n'
      }
      solution += '__________________\n\n'

      if (centa.slots > 1) {
        solution += 'Centa: ' + centa.slots + ' slots'
      } else {
        solution += 'Solt Biblioteca: ' + biblio.slots + '\n'
        solution += 'Slot Autocorriere:' + autocorriere.slots
      }

      return solution

    })
  }

  this.help = () => {
    return ["/bike - Mostra la stazione di partenza e arrivo più adatta"]
  }

}

module.exports = new BikeCommand()
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
      var ospedale = bikeFinder.getDataFor('Stazione FFSS - Ospedale')

      if (getLocalTime().getUTCHours > 7 || getLocalTime().getUTCHours < 11) {
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


      } else if (getLocalTime().getUTCHours > 15 || getLocalTime().getUTCHours < 20) {
        if (centa.bikes > 0) {
          solution = 'Centa: ' + centa.bikes + ' bici\n'
        } else {
          solution = "In centa non ci sono bici"
        }
        solution += '__________________\n\n'

        if (piscina.slots > 1) {
          solution += 'Slot piscina: ' + piscina.slots
        } else {
          solution += 'Solt santa: ' + santa.slots + '\n'
          solution += 'Slot stazione ospedale:' + ospedale.slots
        }
      }else{
        solution = 'Piscina: ' + piscina.bikes + ' bici\n'
      }

      return solution

    })
  }

  this.help = () => {
    return ["/bike - Mostra la stazione di partenza e arrivo più adatta"]
  }

}

module.exports = new BikeCommand()

function getLocalTime() {

  var offset = 1;
  return new Date(new Date().getTime() + offset * 3600 * 1000)
}

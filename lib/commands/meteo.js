const Weather = require('../Weather')
const GotAdapter = require('../GotAdapter')
function MeteoCommand() {

  this.handleRequest = (request) => {
    return request.text == '/meteo'
  }

  this.execute = (request) => {
   const path = "https://openweathermap.org/data/2.5/forecast?id=3165243&units=metric&appid=b1b15e88fa797225412429c1c50c122a1"
    var meateo = new Weather(new GotAdapter())
  

    return meateo.getData(path).then(function () {
      return JSON.stringify(meateo.weather.list[0])
    })
  }

  this.help = () => {
    return ["/meteo - Mostra meteo per trento"]
  }

}

module.exports = new MeteoCommand()
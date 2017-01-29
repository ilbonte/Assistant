'use strict'
// var MyTest = require('./MyTest')
var BikeFinder = require('./BikeFinder')

var parsedRequest = {}
function assistant(request) {
  var response = "-"
  parsedRequest = request
  if (isBotCommand()) {
    var command = request.text.substring(1)
    switch (command) {
      case "saluta":
        response = "ciao"
        break;
      case "bike":
        var bikeFinder = new BikeFinder()
        response ="Bici:" + bikeFinder.getDataFor("Aeroporto - Trento")
        break;
      case "test":
      // var person = new MyTest("Davide", "M")
      // response = person.speak()
      break;
      default:
        response = "comando sconoscito"
    }
  }

  return response
}

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type === "bot_command"
}

module.exports = assistant
const {resolve} = require('path')
const FsAdapter = require('../src/FsAdapter')
const BikeChecker = require()

let assistant =  (request) => {
  let response = "-"
  parsedRequest = request
  if (isBotCommand()) {
    const command = request.text.substring(1)
    switch (command) {
      case "saluta":
        response = "ciao"
        break;
      case "bike":
        let bikeChecker = new BikeChecker(new FsAdapter())
        response = bikeChecker.getDataFor('Biblioteca - Trento')
        break;
      default:
        response = "comando sconoscito"
    }
  }

  return response
}

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type==="bot_command"
}

exports.assistant = assistant

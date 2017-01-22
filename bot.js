"use strict";

var botBuilder = require('claudia-bot-builder');
var parsedRequest = {};
module.exports = botBuilder(function (request) {
  var response = "-";
  parsedRequest = request;
  if (isBotCommand()) {
    var command = request.text.substring(1);
    switch (command) {
      case "saluta":
        response = "ciao";
        break;
      default:
        response = "comando sconoscito";
    }
  }

  return response;
}, {
  platforms: ['telegram']
});

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type === "bot_command";
}

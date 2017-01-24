"use strict";

var assistant = function assistant(request) {
  var response = "-";
  parsedRequest = request;
  if (isBotCommand()) {
    var command = request.text.substring(1);
    switch (command) {
      case "saluta":
        response = "ciaone";
        break;
      default:
        response = "comando sconoscito";
    }
  }

  return response;
};

function isBotCommand() {
  return parsedRequest.originalRequest.message.entities[0].type === "bot_command";
}

exports.assistant = assistant;
'use strict';

var botBuilder = require('claudia-bot-builder');

var parsedRequest = {};
module.exports = botBuilder(assistant, {
  platforms: ['telegram']
});

let assistant =  (request) => {
  let response = "-"
  parsedRequest = request
  if (isBotCommand()) {
    const command = request.text.substring(1)
    switch (command) {
      case "saluta":
        response = "ciaone"
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

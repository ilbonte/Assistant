let {assistant} = require('../lib/assistant')
const {equal} = require('assert')
const {test} = require('m.test')



test.skip("/saluta should return 'ciao' ", function () {
  let request = requestWithCommand('/saluta')
  equal(assistant(request), 'ciao')
})

function requestWithCommand(command) {
  return fullCommand = {
    "sender": 54579809,
    "text": command,
    "originalRequest": {
      "update_id": 313553704,
      "message": {
        "message_id": 65,
        "from": {
          "id": 54579809,
          "first_name": "Davide",
          "last_name": "Bontempelli",
          "username": "ilbonte"
        },
        "chat": {
          "id": 54579809,
          "first_name": "Davide",
          "last_name": "Bontempelli",
          "username": "ilbonte",
          "type": "private"
        },
        "date": 1485114918,
        "text": command,
        "entities": [
          {
            "type": "bot_command",
            "offset": 0,
            "length": 4
          }
        ]
      }
    },
    "type": "telegram"
  }
}
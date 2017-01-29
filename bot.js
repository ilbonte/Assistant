'use strict';

var _require = require('path'),
    resolve = _require.resolve;

var assistant = function assistant(request) {
  var response = "-";
  parsedRequest = request;
  if (isBotCommand()) {
    var command = request.text.substring(1);
    switch (command) {
      case "saluta":
        response = "ciao";
        break;
      case "bike":
        var bikeChecker = new BikeChecker('shuldAdapter');
        response = bikeChecker.getDataFor('Biblioteca - Trento');
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
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function BikeChecker(adapter) {
    _classCallCheck(this, BikeChecker);

    this.adapter = adapter;
    this.bikes = [];
  }

  _createClass(BikeChecker, [{
    key: "getData",
    value: function getData(path) {
      var _this = this;

     
    }
  }, {
    key: "getDataFor",
    value: function getDataFor(stationId) {
      return "yoooo"
    }
  }]);

  return BikeChecker;
}();
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var fs = require('fs');


'use strict';

var botBuilder = require('claudia-bot-builder');

var parsedRequest = {};
module.exports = botBuilder(assistant, {
  platforms: ['telegram']
});

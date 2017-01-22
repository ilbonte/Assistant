'use strict';

var botBuilder = require('claudia-bot-builder');

module.exports = botBuilder(function (request, originalApiRequest) {
  var prettyResponse = 'Here is your request: \n ' + JSON.stringify(request, null, 1);
  return prettyResponse;
}, {
  platforms: ['telegram']
});

'use strict'

const botBuilder = require('claudia-bot-builder')
const assistant = require('./lib/assistant')

const bot = botBuilder(assistant, {
  platforms: ['telegram']
})


module.exports = bot
let BikeChecker = require('../src/BikeChecker')
const {equal, deepEqual} = require('assert')
const {test} = require('m.test')
const bikesData = require('./fixtures/fullBike.json')
const FsAdapter = require('../src/FsAdapter')
const {resolve} = require('path')

const station = {
    "name": "Biblioteca",
    "address": "Via Alfieri / Via Torre Vanga",
    "id": "Biblioteca - Trento",
    "bikes": 7,
    "slots": 17,
    "totalSlots": 24,
    "position": [
      46.07043395910254,
      11.121399842327946
    ]
  }

test("can get data from station id", function (done) {
  let bikeChecker = new BikeChecker(new FsAdapter())
  let bikePath = resolve(__dirname,'./fixtures/fullBike.json')

  bikeChecker.getData(bikePath).then(function () {
    deepEqual(station, bikeChecker.getDataFor('Biblioteca - Trento'))
    done()
  }).catch(done)



})
let GotAdapter = require('../lib/GotAdapter')
const {equal, deepEqual} = require('assert')
const {test} = require('m.test')
const expectedBikes = require('./fixtures/fullBike.json')

test('can get data', function (done) {
  let gotAdapter = new GotAdapter()
  gotAdapter.get('https://os.smartcommunitylab.it/core.mobility/bikesharing/trento').then(function (bikes) {
    equal(expectedBikes.length, bikes.length)
    done()
  }).catch(handle)
})



function handle() {
  console.log("error")
}
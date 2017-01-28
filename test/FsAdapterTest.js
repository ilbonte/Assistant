let FsAdapter = require('../src/FsAdapter')
const {equal, deepEqual} = require('assert')
const {test} = require('m.test')
const expectedBikes = require('./fixtures/fullBike.json')
const {resolve} = require('path')

test('can get data', function (done) {
  let fsAdapter = new FsAdapter()
  fsAdapter.get(resolve(__dirname,'./fixtures/fullBike.json'))
    .then((bikes) => {
      deepEqual(expectedBikes, bikes)
      done()
    }).catch(done)
})



function handle(){
  console.log("error")
}
let FsAdapter = require('../lib/FsAdapter')
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
    }).catch(handle)
})



function handle(){
  console.log("error")
}
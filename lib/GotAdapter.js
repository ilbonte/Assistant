const got = require('got')

function GotAdapter() {

}

GotAdapter.prototype.get = function (url) {
  return new Promise(function(resolve,reject){
    got(url, { json: true }).then(function(result){
      resolve(result.body)
    }).catch(function(){
      reject("error downlading json")
    })
  })
}

module.exports = GotAdapter
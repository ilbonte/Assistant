const got = require('got')

function GotAdapter() {

}

GotAdapter.prototype.get = function (url) {
  return got(url, { json: true })
}


module.exports = GotAdapter
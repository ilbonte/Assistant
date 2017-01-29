const fs= require('fs');


function FsAdapter(){

}

 FsAdapter.prototype.get = function(filePath) {   
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, function (err, data) {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(data))
        }
      })
    })
  }

module.exports = FsAdapter
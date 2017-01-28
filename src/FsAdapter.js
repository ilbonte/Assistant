const fs= require('fs');

module.exports = class FsAdapter {
  constructor() {

  }

  get(filePath) {   
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
}
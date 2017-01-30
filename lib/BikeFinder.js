function BikeFinder(adapter) {
  this.adapter = adapter
}

BikeFinder.prototype.getData = function(path){
    return new Promise((resolve, reject)=>{
      this.adapter.get(path).then((bikes)=>{
        this.bikes=bikes
        resolve()
      }).catch(reject)
    })
};

BikeFinder.prototype.getDataFor = function (stationId) {
  for (var i = 0; i < this.bikes.length; i++) {
    if (this.bikes[i].id === stationId) {
      return this.bikes[i]
    }
  }

  return {}
};

module.exports = BikeFinder
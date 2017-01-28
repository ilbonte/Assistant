module.exports = class BikeChecker {
  constructor(adapter) {
    this.adapter = adapter
    this.bikes = []
  }

  getData(path){
    //downloading the data
    return new Promise((resolve, reject)=>{
      this.adapter.get(path).then((bikes)=>{
        this.bikes=bikes
        resolve()
      }).catch(reject)
    })
  }



  getDataFor(stationId) {
    for(let i=0; i< this.bikes.length; i++){
     if(this.bikes[i].id===stationId){
       return this.bikes[i]
     }
    }
  }
}
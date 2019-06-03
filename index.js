function produceDrivingRange(limit){
    return function(a,b){
        a = parseInt(a.slice(0,2));
        b = parseInt(b.slice(0,2));
        if(Math.abs(b-a) <= limit){
            return "within range by " + (limit - Math.abs(b-a))
        } else {
            return (Math.abs(b-a) - limit) + " blocks out of range"
        }

    }

}

function produceTipCalculator(percent){
    return function(fare){
        return fare * percent;
    };
}

function createDriver() {
    let driverId = 0;
    // return the class
    return class {
      constructor(name, manufacturePrice) {
        this.name = name;
        
        this.id = ++driverId;
      }
   

    };
  }
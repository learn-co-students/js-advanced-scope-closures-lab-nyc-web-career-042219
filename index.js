function produceDrivingRange(range){
  return function(from, to){
    if ((to.slice(0,2) - from.slice(0,2)) > range ){
      return `${to.slice(0,2)- from.slice(0,2) - range} blocks out of range`
    }
    else {
      return `within range by ${range - (to.slice(0,2)- from.slice(0,2))}`
    }
  };
};

function produceTipCalculator(prec){
  return function(money){
    return money*prec
  };
};

function createDriver(){
  let driverId = 0
  return class Driver {
    constructor(name) {
      this.name = name
      this.id = driverId++
    }
  }
};


const produceDrivingRange = function(num) {
  return function(begin, end) {
      let distance = Math.abs(parseInt(end) - parseInt(begin));
      if (num > distance) {
          return `within range by ${num - distance}`;
      } else {
          return `${Math.abs(num - distance)} blocks out of range`
      }
  }
}

const produceTipCalculator = function(tip){
    return function(amount) {
    return amount * tip;
    }
}

const createDriver = function(name){
   let driverId = 0
      return class Driver {
          constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}

function produceDrivingRange(blockRange) {
  return function(start, end) {
    let pointA = parseInt(start);
    let pointB = parseInt(end);
    let trip = Math.abs(pointB - pointA);
    let difference = blockRange - trip;

    if (difference > 0) {
      return `within range by ${difference}`
    } else {
        return `${Math.abs(difference)} blocks out of range`;
      }
    }
  }


function produceTipCalculator(percentTip) {
  return function (fare) {
    return fare * percentTip;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}

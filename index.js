function produceDrivingRange(n) {
  return function (x1, x2) {
    x1 = parseInt(x1.split("th")[0]);
    x2 = parseInt(x2.split("th")[0]);
    const diff = x2 - x1;
    if (diff <= n ){
      return `within range by ${diff}`;
    } else {
      return `${diff - n } blocks out of range`;
    }
  }
}

function produceTipCalculator(tipPercent) {
  return function (total) {
    return total * tipPercent;
  }
}

function createDriver() {
  let driverId = 0;
  return class {
    constructor(name) {
      this.name = name;
      this.id = driverId;
      driverId++;
    }
  }
}

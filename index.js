function produceDrivingRange(blockRange) {
  return function(str1, str2) {
    num1 = str1.slice(0, 2);
    num2 = str2.slice(0, 2);
    total = Math.abs(num1 - num2);
    if (total > blockRange) {
      return `${total - blockRange} blocks out of range`
    } else {
      return `within range by ${blockRange - total}`
    };
  };
};

function produceTipCalculator(percentage) {
  return function(total) {
    return total * percentage;
  };
};

function createDriver() {
  driverId = 0;
  return class Driver {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    };
  };
};

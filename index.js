const produceDrivingRange = function(num) {
    return function(startStr, endStr) {
        let distance = Math.abs(parseInt(endStr) - parseInt(startStr));
        if (num > distance) {
            return `within range by ${num - distance}`;
        } else {
            return `${Math.abs(num - distance)} blocks out of range`
        }
    }
}

const produceTipCalculator = function(tip) {
    return function(amt) {
        return amt * tip;
    }
}

const createDriver = function() {
    let driverId = 0
    return class Driver {
        constructor(name) {
            this.name = name;
            this.id = ++driverId;
        }
    }
}
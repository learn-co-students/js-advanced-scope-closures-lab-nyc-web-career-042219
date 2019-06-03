function produceDrivingRange(num) {
    return function(arg1, arg2) {
        let num1 = parseInt(arg1);
        let num2 = parseInt(arg2);

        let range = num1 + num - num2;

        if (range > 0) {
            return `within range by ${range}`
        }
        else {
            return `${Math.abs(range)} blocks out of range`
        }
    }
}

function produceTipCalculator(percentage) {
    return function(fare) {
        return fare * percentage
    }
}

function createDriver() {
    let DriverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id = ++DriverId;
        }
    }
}
function produceDrivingRange(range) {
    return function(start, end) {
        const startNum = Number(start.split('th')[0]);
        const endNum = Number(end.split('th')[0]);
        const difference = range - (endNum - startNum);
        if (difference < 0) {
            return `${Math.abs(difference)} blocks out of range`;
        } else {
            return `within range by ${difference}`
        }
    }
}

function produceTipCalculator(tipPercentage) {
    return function(amount) {
        return amount * tipPercentage;
    }
}

function createDriver() {
    let itemId = 0;

    return class {
        constructor(name) {
            this.name = name;
            this.id = ++itemId;
        }
    }
}
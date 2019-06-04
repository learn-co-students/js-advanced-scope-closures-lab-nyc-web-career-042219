const produceDrivingRange = function(num) {
    return function(start, end) {
        let startNum = parseInt(start.slice(0, -2));
        let endNum = parseInt(end.slice(0, -2));
        let range = Math.abs(startNum - endNum);
        if(range < num){
            return `within range by ${num - range}`;
        }else if (range > num){
            return `${range - num} blocks out of range`;
        };
    };
};

const produceTipCalculator = function(percent) {
    return function(bill) {
        return bill*percent;
    };
};

function createDriver() {
    let driverId = 0;
    return class {
        constructor(name) {
            this.name = name;
            this.id += driverId;
        };
    };
};
function produceDrivingRange(blockRange){
    return function(startBlock, endBlock){
        let start = parseInt(startBlock);
        let end = parseInt(endBlock);
        const difference = blockRange - (end - start);
        
        if (difference < 0){
            return `${Math.abs(difference)} blocks out of range`;
        } else{
            return `within range by ${difference}`;
        };
    };
};

function produceTipCalculator(tip){
    return function (fare){
        return fare * tip;
    };
};

function createDriver(){
    let driverId = 0;
    return class {
        constructor(name){
            this.name = name;
            this.id = ++driverId
        }
    }
}
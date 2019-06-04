    function produceDrivingRange(num){
        return function(string1,string2){
            let start = parseInt(string1)
            let end = parseInt(string2)
            let distance = Math.abs(end-start)
            let difference = num - distance

            if (difference > 0 ){
                return `within range by ${difference}` 
        } else { 
            return `${Math.abs(difference)} blocks out of range`
        }

    }
}

    function produceTipCalculator(percent){
        return function(fare){
            let tip = fare*percent 
            return tip
        }
    }

    function createDriver(){
        let driverId = 0
        return class {
            constructor(name){
                this.id = ++driverId
                this.name = name
            }
        }
    }
function produceDrivingRange(num){
	return function(str1, str2){
		let num1 = parseInt(str1);
		let num2 = parseInt(str2);
		let range = (num1 > num2 ? num1 - num2 : num2 - num1);
		if (range > num){
			return `${range - num} blocks out of range`;
		} else {
			return `within range by ${range}`
		}
	}
}

function produceTipCalculator(tip){
	return function(fare){
		return fare * tip;
	}
}

function createDriver() {
	let DriverId = 0
	return class {
		constructor(name) {
			this.name = name;
			this.id = ++DriverId;
		} 
	}
}
let Math = require('./math.js');
exports.Sum = function(a, b){
	console.log(`the sum of ${a} and ${b} is ${Math.AddNumber(a, b)}`);
};
"use strict"
function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;
	if (d === 0) {
		let x = -b / (2 * a);
		arr.push(x);
	} else if (d > 0) {
		let x1 = (-b + Math.sqrt(d)) / (2 * a);
		let x2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(x1);
		arr.push(x2);
	}
	console.log(arr)
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let rate = (percent / 100) / 12;
	let body = amount - contribution;
	let monthlyPayment = body * (rate + (rate / (((1 + rate) ** countMonths) - 1)));
	let sum = Number((monthlyPayment * countMonths).toFixed(2));
	console.log(sum);
	return sum;
}
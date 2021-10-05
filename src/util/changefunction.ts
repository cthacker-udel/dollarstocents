/* eslint-disable complexity */
export const changeFunc = (amt: string, qLimit: number, dLimit: number, nLimit: number): number[] => {
	if (isNaN(parseInt(amt))) {
		return [0, 0, 0, 0];
	}
	/*

	Returns a array of the amount of change the person would receive
	[quarters,dimes,nickels,pennies]

	*/

	console.log(`||| qLimit = ${qLimit} and dLimit = ${dLimit} and nLimit = ${nLimit}`);

	// add on cents and then convert dollars to pennies
	let preCents: number;
	if (amt.includes('.') && amt.substring(amt.indexOf('.') + 1).length >= 1) {
		// console.log(`in if`);
		preCents = parseInt(amt.substring(amt.indexOf('.') + 1));
	} else {
		// console.log(`in else`);
		preCents = 0;
	}
	const dollarsAmt: string = amt.substring(0, amt.includes('.') ? amt.indexOf('.') : amt.length);
	let penniesAmt: number = parseInt(dollarsAmt) * 100;
	let quarters = 0;
	let dimes = 0;
	let nickels = 0;
	let pennies: number = preCents;
	// console.log(`pennies : ${pennies} and penniesAmt : ${penniesAmt}`);
	while (penniesAmt >= 25) {
		if (quarters >= qLimit && qLimit !== 0) {
			break;
		}
		quarters++;
		penniesAmt -= 25;
	}
	while (penniesAmt >= 10) {
		if (dimes >= dLimit && dLimit !== 0) {
			break;
		}
		dimes++;
		penniesAmt -= 10;
	}
	while (penniesAmt >= 5) {
		if (nickels >= nLimit && nLimit !== 0) {
			break;
		}
		nickels++;
		penniesAmt -= 5;
	}
	pennies += penniesAmt;
	while (pennies >= 25) {
		if (quarters >= qLimit && qLimit !== 0) {
			break;
		}
		quarters++;
		pennies -= 25;
	}
	while (pennies >= 10) {
		if (dimes >= dLimit && dLimit !== 0) {
			break;
		}
		dimes++;
		pennies -= 10;
	}
	while (pennies >= 5) {
		if (nickels >= nLimit && nLimit !== 0) {
			break;
		}
		nickels++;
		pennies -= 5;
	}
	console.log(`returning : \nquarters: ${quarters}\nnickels : ${nickels}\ndimes: ${dimes}\npennies: ${pennies}`);
	return [quarters, dimes, nickels, !isNaN(pennies) ? pennies : 0];
};

export const changeFunc = (amt: string): number[] => {
	if (isNaN(parseInt(amt))) {
		return [0, 0, 0, 0];
	}
	/*

	Returns a array of the amount of change the person would receive
	[quarters,dimes,nickels,pennies]

	*/

	// add on cents and then convert dollars to pennies
	let preCents: number;
	if (amt.includes('.') && amt.substring(amt.indexOf('.') + 1).length >= 1) {
		console.log(`in if`);
		preCents = parseInt(amt.substring(amt.indexOf('.') + 1));
	} else {
		console.log(`in else`);
		preCents = 0;
	}
	const dollarsAmt: string = amt.substring(0, amt.includes('.') ? amt.indexOf('.') : amt.length);
	let penniesAmt: number = parseInt(dollarsAmt) * 100;
	let quarters = 0;
	let dimes = 0;
	let nickels = 0;
	let pennies: number = preCents;
	console.log(`pennies : ${pennies} and penniesAmt : ${penniesAmt}`);
	while (penniesAmt >= 25) {
		quarters++;
		penniesAmt -= 25;
	}
	while (penniesAmt >= 10) {
		dimes++;
		penniesAmt -= 10;
	}
	while (penniesAmt >= 5) {
		nickels++;
		penniesAmt -= 5;
	}
	pennies += penniesAmt;
	while (pennies >= 25) {
		quarters++;
		pennies -= 25;
	}
	while (pennies >= 10) {
		dimes++;
		pennies -= 10;
	}
	while (pennies >= 5) {
		nickels++;
		pennies -= 5;
	}
	console.log(`returning : \nquarters: ${quarters}\nnickels : ${nickels}\ndimes: ${dimes}\npennies: ${pennies}`);
	return [quarters, dimes, nickels, !isNaN(pennies) ? pennies : 0];
};

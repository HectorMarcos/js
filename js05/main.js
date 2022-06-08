let zeroOrOne = () => {
	let i = Math.round(Math.random());
	return i;
};

let headOrTails = (zeroOrOne) => {
	if (zeroOrOne == 0) {
		console.log("Tails!");
	} else {
		console.log("Head!");
	}
};

headOrTails(zeroOrOne());

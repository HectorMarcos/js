////

let sum = (i, j) => {
	k = i + j;
	return k;
};

console.log(sum(3, 2));

////

let myName = (noname, surname1, surname2) => {
	console.log(noname + " " + surname1 + " " + surname2);
};

////

let showBigger = (i, j) => {
	if (i > j) {
		console.log(i + " is the bigger one");
	} else if (i < j) {
		console.log(j + " is the bigger one");
	} else if ((i = j)) {
		console.log("Both numbers are equal");
	}
};

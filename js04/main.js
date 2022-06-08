let print = (noname, surname) => {
	console.log("Hello " + noname + " " + surname);
};

print("Hector", "Marcos");

////

let noReturn = (i) => {
	if (i == true || i == false) {
		console.log(i);
	} else {
		console.log("Your value was not required");
	}
};

noReturn(true);

////

let infiniteFunction = (...j) => {
	j.forEach((k) => {
		console.log(k);
	});
};

infiniteFunction(1, 2, 3, 4, 5);

let str1 = "AOAOAOAOAOAOAOAOAOAOAOAOAOA";
let str2 = str1.replace(/A/g, "O");

console.log(str2);

////

let aca = (text) => {
	if (text.startsWith("aca")) {
		console.log("Empieza con aca");
		return true;
	} else {
		console.log("No empieza con aca");
		return false;
	}
};

aca("academia");

////

let sayHello = () => {
	for (let i = 0; i < 3; i++) {
		console.log("Hola");
	}
};

sayHello();

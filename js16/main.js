let arr = ["⭐", "😊", "🤣", "⭐", "❤", "👌", "😎"];

let push = (event) => {
	arr.push("💋");
	console.log(arr);
	arrayRefesh(arr);
};

let unshift = (event) => {
	arr.unshift("💋");
	console.log(arr);
	arrayRefesh(arr);
};

let insertAt = (event) => {
	let p = document.getElementById("addAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 0, "✔");
	}
	console.log(arr);
	console.log(positionValue);
	arrayRefesh(arr);
};

let pop = (event) => {
	arr.pop();
	console.log(arr);
	arrayRefesh(arr);
};

let shift = (event) => {
	arr.shift();
	console.log(arr);
	arrayRefesh(arr);
};

let removeAt = (event) => {
	let p = document.getElementById("removeAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 1);
	}
	console.log(arr);
	arrayRefesh(arr);
};

// FIXME cada iteraion borra el arrayDiv, de modo que crashea y deja de pintar :S

let arrayRefesh = (array) => {
	let arrayDiv = document.getElementById("arrDiv");
	arrayDiv.innerHTML = "";
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		arrayDiv.innerHTML += `<p>[${element}]</p>`;
	}
};

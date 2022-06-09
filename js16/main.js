let arr = ["⭐", "😊", "🤣", "⭐", "❤", "👌", "😎"];

let push = (event) => {
	arr.push("💋");
	console.log(arr);
	arrayRefesh(arr);
};

let unshift = (event) => {
	arr.unshift("💋");
	console.log(arr);
};

let insertAt = (event) => {
	let p = document.getElementById("insertAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 0, "✔");
	}
	console.log(arr);
	console.log(positionValue);
};

let pop = (event) => {
	arr.pop();
	console.log(arr);
};

let shift = (event) => {
	arr.shift();
	console.log(arr);
};

let removeAt = (event) => {
	let p = document.getElementById("removeAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 1);
	}
	console.log(arr);
};

// FIXME cada iteraion borra el arrayDiv, de modo que crashea y deja de pintar :S

let arrayRefesh = (array) => {
	let arrayDiv = document.getElementById("arrDiv");
	let arrayUpdate = arrayDiv;

	for (let i = 0; i < arr.length; i++) {
		if (i == 0) {
			//trash, no funciona
			arrayDiv.remove();
			i++;
			console.log(i);
		} else {
			let element = arr[i];
			arrayUpdate.innerHTML += `<p>${element}</p>`;
		}
	}
};

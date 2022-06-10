let arr = ["⭐", "😊", "🤣", "⭐", "❤", "👌", "😎"];

let push = (event) => {
	arr.push("💋");
	console.log(arr);
	arrayRefresh(arr);
};

let unshift = (event) => {
	arr.unshift("💋");
	console.log(arr);
	arrayRefresh(arr);
};

let insertAt = (event) => {
	let p = document.getElementById("addAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 0, "✔");
	}
	console.log(arr);
	console.log(positionValue);
	arrayRefresh(arr);
	//selectAddRefresh(arr);
	//selectRemoveRefresh(arr);
	selectRefresh(arr);
};

let pop = (event) => {
	arr.pop();
	console.log(arr);
	arrayRefresh(arr);
};

let shift = (event) => {
	arr.shift();
	console.log(arr);
	arrayRefresh(arr);
};

let removeAt = (event) => {
	let p = document.getElementById("removeAtN");
	let positionValue = p.options[p.selectedIndex].text;
	if (positionValue != 0) {
		arr.splice(positionValue - 1, 1);
	}
	console.log(arr);
	arrayRefresh(arr);
	//selectAddRefresh(arr);
	//selectRemoveRefresh(arr);
	selectRefresh(arr);
};

let arrayRefresh = (array) => {
	let arrayDiv = document.getElementById("arrDiv");
	arrayDiv.innerHTML = "";
	for (let i = 0; i < arr.length; i++) {
		let element = arr[i];
		arrayDiv.innerHTML += `<p>${element}</p>`;
	}
};

////

let selectRemoveRefresh = (array) => {
	let count = document.getElementById("removeAtN");
	count.innerHTML = "";
	for (let i = 0; i < arr.length + 1; i++) {
		removeAtN.innerHTML += `<option value="${i}">${i}
			</option>`;
	}
};

let selectAddRefresh = (array) => {
	let count = document.getElementById("addAtN");
	count.innerHTML = "";
	for (let i = 0; i < arr.length + 1; i++) {
		addAtN.innerHTML += `<option value="${i}">${i}
			</option>`;
	}
};

let selectRefresh = (array) => {
	let count = document.getElementById("removeAtN");
	count.innerHTML = "";
	for (let i = 0; i < arr.length + 1; i++) {
		removeAtN.innerHTML += `<option value="${i}">${i}
			</option>`;
	}
	let count2 = document.getElementById("addAtN");
	count2.innerHTML = "";
	for (let i = 0; i < arr.length + 1; i++) {
		addAtN.innerHTML += `<option value="${i}">${i}
			</option>`;
	}
};

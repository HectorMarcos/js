//1//
let food = ["ð", "ð¯", "ð", "ð", "ð", "ð¿", "ð§", "ð¥", "ð¥"];

for (let i = 0; i < food.length; i++) {
	if (food[i] == "ð") {
		food.fill("ðº", i, food.length);
		break;
	} else {
	}
}

console.log(food);

//2//

let food = ["ð", "ð¯", "ð", "ð", "ð", "ð¿", "ð§", "ð¥", "ð¥"];

for (let i = 0; i < food.length; i++) {
	if (food[i] == "ð") {
		console.log("Hay una piÃ±a en la posicion " + (i + 1));
		break;
	} else {
	}
}

//3//

let food = ["ð", "ð¯", "ð", "ð", "ð", "ð¿", "ð§", "ð¥", "ð¥"];

for (let i = 0; i < food.length; i++) {
	if (food[i] === "ð") {
		food.splice(i, 1);
		break;
	} else {
	}
}

console.log(food);

//4//

let fruits = ["ð", "ð", "ð", "ð", "ð"];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] === "ð") {
		fruits[i] = "ð";
	}
}

console.log(fruits);

//5//

let spicy = ["ð¶", "ð¥", "ð¶", "ð¥", "ð¶"];
let cry = [];

for (let i = 0; i < spicy.length; i++) {
	if (spicy[i] === "ð¶") {
		cry.push(spicy[i]);
		cry.push("ð­");
	} else {
		cry.push(spicy[i]);
	}
}

const arr5 = ["ð¶", "ð¥", "ð¶", "ð¥", "ð¶", "ð¥"];
const result = [];

arr5.map((item, index, array) => {
	return item === "ð¶" && array[index + 1] === "ð¥"
		? result.push(item, "ð¯")
		: result.push(item);
});
console.log(result);

//6//

let deck = ["ð´", "ð´", "ð´", "ð´", "ð´", "ð´"];

let joker = [];

deck.map((item, index, array) => {
	return index == array.length / 2
		? joker.push("ð", item)
		: joker.push(item);
});
console.log(joker);

//1//
let food = ["🍔", "🌯", "🍕", "🍟", "🍍", "🍿", "🧂", "🥓", "🥚"];

for (let i = 0; i < food.length; i++) {
	if (food[i] == "🍕") {
		food.fill("🍺", i, food.length);
		break;
	} else {
	}
}

console.log(food);

//2//

let food = ["🍔", "🌯", "🍕", "🍟", "🍍", "🍿", "🧂", "🥓", "🥚"];

for (let i = 0; i < food.length; i++) {
	if (food[i] == "🍍") {
		console.log("Hay una piña en la posicion " + (i + 1));
		break;
	} else {
	}
}

//3//

let food = ["🍔", "🌯", "🍕", "🍟", "🍍", "🍿", "🧂", "🥓", "🥚"];

for (let i = 0; i < food.length; i++) {
	if (food[i] === "🍍") {
		food.splice(i, 1);
		break;
	} else {
	}
}

console.log(food);

//4//

let fruits = ["🍓", "🍋", "🍓", "🍋", "🍓"];

for (let i = 0; i < fruits.length; i++) {
	if (fruits[i] === "🍓") {
		fruits[i] = "🍄";
	}
}

console.log(fruits);

//5//

let spicy = ["🌶", "🥛", "🌶", "🥛", "🌶"];
let cry = [];

for (let i = 0; i < spicy.length; i++) {
	if (spicy[i] === "🌶") {
		cry.push(spicy[i]);
		cry.push("😭");
	} else {
		cry.push(spicy[i]);
	}
}

const arr5 = ["🌶", "🥛", "🌶", "🥛", "🌶", "🥛"];
const result = [];

arr5.map((item, index, array) => {
	return item === "🌶" && array[index + 1] === "🥛"
		? result.push(item, "🎯")
		: result.push(item);
});
console.log(result);

//6//

let deck = ["🎴", "🎴", "🎴", "🎴", "🎴", "🎴"];

let joker = [];

deck.map((item, index, array) => {
	return index == array.length / 2
		? joker.push("🃏", item)
		: joker.push(item);
});
console.log(joker);

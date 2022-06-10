function random(numbers) {
	return numbers[Math.floor(Math.random() * numbers.length)];
}

function playerChoice(choice) {
	switch (choice) {
		case 1:
			return "✂";
			break;
		case 2:
			return "🧻";
			break;
		case 3:
			return "🧱";
			break;
		default:
			break;
	}
}

function playerWinner(player1, player2) {
	let a = playerChoice(player1);
	let b = playerChoice(player2);
	if (a === b) {
		return "even";
	} else if (a == "✂" && b == "🧻") {
		return "player1";
	} else if (a == "🧻" && b == "🧱") {
		return "player1";
	} else if (a == "🧱" && b == "✂") {
		return "player1";
	} else {
		return "player2";
	}
}

function buildGame() {
	let player1 = random([1, 2, 3]);
	let player2 = random([1, 2, 3]);
	console.log("player 1: " + playerChoice(player1));
	console.log("player 2: " + playerChoice(player2));
	console.log("winner is: " + playerWinner(player1, player2));
	let player1Choice = playerChoice(player1);
	let player2Choice = playerChoice(player2);
	let winner = playerWinner(player1, player2);
	let result = [player1Choice, player2Choice, winner];
	return result;
}

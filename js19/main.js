function cardOnHover(board) {
	let test = document.getElementById("board");
	let card = test.img;
	console.log(test);
	console.log(card);

	test.addEventListener(
		"mouseenter",
		function (event) {
			let img = document.getElementsByClassName("card");
			img.src = "./card-front.png";
			console.log(event);
			//document.getElementById("board").src = "./card-front.png";
			//event.target.src = "./card-front.png";
			//console.log(event.target);

			//TODO añadir temporizador
			//setTimeout(function () {
			//event.target.style.color = "";
			//}, 500);
		}
		//false
	);
}

function cardSwap(event) {
	let img = document.getElementsByClassName("card");
	let cardId = event.currentTarget.getAttribute("id");
	img.src = "./card-front.png";
}

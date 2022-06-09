let solveQuestion = (event) => {
	let question = event.currentTarget.getAttribute("id");
	let answer = "d";
	if (question === answer) {
		event.target.style.backgroundColor = "green";
		//event.target.classList.add("success");
		//console.log(event);
	} else event.target.style.backgroundColor = "red";
	//event.target.classList.add("fail");
};

let solveQuestion = (event) => {
	let question = event.currentTarget.getAttribute("id");
	//console.log(question);
	let answer = "d";
	if (question === answer) {
		//event.target.style.backgroundColor = "green";
		//event.className += " success";
		//question.classList.add("success");
		//event.target.classList.add("success");
		//event.classList.add("success");
		//console.log(event.srcElement.id);
		const element = document.getElementById(event.srcElement.id);
		element.classList.add("success");
	} else {
		const element = document.getElementById(event.srcElement.id);
		element.classList.add("fail");
	}
};

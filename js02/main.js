let person = prompt("Please enter your name");
let text;
if (person == null || person == "") {
	alert("You have not entered a name");
} else {
	alert("Hello " + person + "! How are you doing?");
}

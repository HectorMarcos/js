## JS 07 progate.com

# 1. Intro to JavaScript (ES6)

1

```
console.log("Welcome to ES6 Study I!");
console.log("Let's learn with Ken the Ninja!");

```

2

```
// Print "Hello World" to the console
console.log("Hello World");

// Print "Ken the Ninja" to the console
console.log("Ken the Ninja");

// Comment out the line below
//console.log("This line should be a comment");

```

3

```
// Print the result of adding 5 and 3
console.log(5 + 3);

// Print the result of subtracting 8 from 20
console.log(20 - 8);

// Print the string "4 + 5"

console.log("4 + 5");
```

4

```
// Print the result of 8 times 4
console.log(8 * 4);

// Print the result of 24 divided by 4
console.log(24 / 4);

// Print the remainder after dividing 7 by 2

console.log(7 % 2);
```

5

```
// Print the string combination of "Master " and "Wooly"
console.log("Master "+"Wooly");

// Print the string combination of "20" and "15"
console.log("20"+"15");
```

6

```
// Declare the variable name with the string value "Ken the Ninja"
let name = "Ken the Ninja";

// Print the value of the variable name

console.log(name);
```

6

```
// Declare the variable length
let length = 5;

// Print the value of the length variable
console.log(length);

// Use the length variable as radius to print the circle's area
console.log(length * length * 3);
```

7

```
let name = "Ken the Ninja";
console.log(name);

// Update the name variable with the value "Birdie"
name = "Birdie";

// Print the value of the name variable

console.log(name);
```

8

```
let number = 7;
console.log(number);

// Add 3 to the value of the number variable
number = number + 3;

console.log(number);

// Divide the value of the number variable by 2
number = number / 2;

console.log(number);
```

9

```
// Define the language constant
const language = "French";

// Print the value of the language constant
console.log(language);


// Use the language constant to print "I can speak ____"
console.log("I can speak "+language);
```

10

```
const name = "Ken the Ninja";
const age = 14;

// Print the string "My name is ____"
console.log(`My name is ${name}`);


// Print the string "Today I am ____ years old"
console.log(`Today I am ${age} years old`);
```

11

```
const level = 12;

// Add an if statement with the condition: level > 10
if (level > 10){
  console.log("Your level is higher than 10");
}
```

12

```
const age = 24;

// Print the result of age >= 18
console.log(age >= 18);

// Print the result of age < 18
console.log(age < 18);

// When the value of age is 18 or greater, Print "I am 18 or older"
if (age >= 18){
  console.log("I am 18 or older");
}

```

13

```
const password = "kentheninja";

// When the value of password is "kentheninja", print "Signed in successfully"
if(password === "kentheninja"){
  console.log("Signed in successfully");
}


// When the value of password is not "kentheninja", print "Wrong password"
if(password !== "kentheninja"){
  console.log("Wrong password");
}
```

14

```
const age = 17;

// When the condition isn't met, print "I am under 18 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else{
  console.log("I am under 18 years old");
}

```

15

```
const age = 17;

// When age is 10 or more but less than 18, print:
// "I am under 18 but over 9 years old"
if (age >= 18) {
  console.log("I am 18 or older");
} else if(age >= 10){
  console.log("I am under 18 but over 9 years old");
}

 else {
  console.log("I am under 10 years old");
}

```

16

```
const age = 24;

// Add an if statement with the specified conditions
if (age >= 20 && age < 30){
  console.log("I am in my 20s");
}

```

17

```
const n = 2;

switch (n) {
  case 1:
    console.log("Very lucky");
    break;

  // Add a case for when n is 2
    case 2:
      console.log("Lucky");
      break;

  // Add a case for when n is 3
    case 3:
      console.log("A little lucky");
      break;

}
```

18

```
const n = 5;

switch (n) {
  case 1:
    console.log("Very lucky");
    break;
  case 2:
    console.log("Lucky");
    break;
  case 3:
    console.log("A little lucky");
    break;
  // Add code for when the value of n doesn't match any other cases
  default:
    console.log("Unlucky");
    break;

}
```

## JavaScript Study II

1

```
// Define the number variable
let number = 1;
// Print the value of the number variable, then add 1 to it
console.log(number);
number += 1;
// Copy the 2 lines above and paste them 4 times below
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
number += 1;
console.log(number);
```

2

```
// Define the number variable
let number = 1;
// Add a while loop
while (number <= 100){
  console.log(number);
  number += 1;
}
```

3

```
// Use a for loop to print numbers from 1 to 100
for(let number = 1; number <= 100; number+=1){
  console.log(number);
}

```

4

```
// Complete the for loop
for (let number = 1; number <= 100; number +=1) {
  // Use an if statement to print "Multiple of 3" when number is a multiple of 3
  if(number%3===0){
    console.log("Multiple of 3");
  }else{
    console.log(number);
  }
}
```

5

```

```

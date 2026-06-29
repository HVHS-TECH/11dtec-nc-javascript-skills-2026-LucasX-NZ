console.log("Running t12_conditionals.js")

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");

// get value from input box
let username = 0;
let age = 0;
let dollars = 0;
let year = 2026;

// variables
let oldAge = age + 10;
let birthYear = year - age;

// clear output
OUTPUT.innerHTML = "<h2>Added by JavaScript</h2>";

/****************************
Main code
****************************/



/****************************
functions
****************************/

Welcome();

function Welcome() {
OUTPUT.innerHTML += "<p>A chocolate bar costs $4</p>";
}

function start() {
dollars = Number(document.getElementById("moneyInput").value);
age = Number(document.getElementById("ageInput").value);
username = (document.getElementById("usernameInput").value);


if (dollars < 4) {
console.log("You're broke");
}

if (dollars >= 4) {
console.log("Rich boy");
}

OUTPUT.innerHTML += "<p>Hi " + username + " as of " + year + " you are " + age + " years old.</p>";

OUTPUT.innerHTML += "<p>You were born in " + birthYear + "</p>";

OUTPUT.innerHTML += "<p>In 10 years you'll be " + oldAge + " years old</p>";

OUTPUT.innerHTML += "<p>You have " + dollars + " dollars</p>";

OUTPUT.innerHTML += "<p>The current year is " + year + "</p>";
}

OUTPUT.innerHTML += "<p>1, 2, 3, 4, 5</p>";

let Array = [1, 2, 3, 4, 5];

let choice = nuCHOOSE_FIELD.value;

OUTPUT.innerHTML += "You choose " + choice + "</p>";
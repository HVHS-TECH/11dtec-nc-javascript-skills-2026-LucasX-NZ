/****************************
Name of task:
****************************/
console.log("Running t06_functions.js")

//Variables

/****************************
Main Code
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h1>Hello World!</h1>";

/****************************
Functions
****************************/

function displayWelcome(_name, _products) {
    OUTPUT.innerHTML += "<h2>The products for " + _name + " are: " + _products + "</h2>";
};


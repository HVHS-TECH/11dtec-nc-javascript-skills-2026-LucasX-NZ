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

function welcome() {
    OUTPUT.innerHTML += "<h2>Welcome</h2>";
};

welcome();
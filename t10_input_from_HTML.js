/****************************
Name of task:
****************************/
console.log("Running t10_input_from_HTML.js")

//Variables

/****************************
Main Code
****************************/

const OUTPUT = document.getElementById("spaceForJavaScriptOutput");
OUTPUT.innerHTML = "<h1>Hello World!</h1>";

const FORMNAME = document.getElementById("formedname");
let name = FORMNAME.value;

/****************************
Functions
****************************/

function getName() {
    const FORMNAME = document.getElementById("formedname");
    let username = FORMNAME.value;
    OUTPUT.innerHTML = "<h2>Hello " + username + "!</h2>";
}


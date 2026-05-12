/****************************
Name of task:
****************************/
console.log("Running t10_input_from_HTML.js")

//Variables

/****************************
Main Code
****************************/



const FORMNAME = document.getElementById("formedname");
let name = FORMNAME.value;

/****************************
Functions
****************************/

function getName() {
    const FORMNAME = document.getElementById("formedname");
    let name = FORMNAME.value;
    OUTPUT.innerHTML = "<h2>Hello "+name+"!</h2>";
}

 getName()
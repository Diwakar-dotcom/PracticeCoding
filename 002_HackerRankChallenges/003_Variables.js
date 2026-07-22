// Task

// In the editor below, declare a variable named newVariable and assign it the following string, "My First Variable".

// My Purposed Solutions:

//Write your code below this line.
let newVariable = "My First Variable";

//Hide Everything Below This

try {
    if(newVariable === "My First Variable"){
        console.log("Variable is declared and assigned correctly.");
    }
    else {
        console.log("Variable is not assigned correctly.")
    }
}
catch(err) {
    console.log(err.message);
}

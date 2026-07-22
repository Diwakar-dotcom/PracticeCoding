/*
Task

Given two numeric variables, a and b, write the following:

Create a variable, add, and assign it the sum of a and b.
Create a variable, sub, and assign it result of b subtracted from a.
Create a variable, mul, and assign it the product of a and b.
Create a variable, div, and assign it the result of of a divided by b.
Create a variable, inc, and assign it the preincremented value of a.
Create a variable, dec, and assign it the predecremented value of b.

*/

"use strict"
let a = Math.floor((Math.random() * 10) + 1);
let b = Math.floor((Math.random() * 10) + 1);
let test_a = a;
let test_b = b;
//Head ends

//Do not declare variables `a` and `b`.
//Write your code below this line.
let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;
let inc = ++a;
let dec = --b;
//Hide Everything Below This

try {
  	var count = 0;
  	
    //Addition test
    if(add === test_a + test_b){
        count += 1;
    }
    else {
        console.log("add is not assigned correctly.");
    }
    
    //Subtraction test
    if(sub === test_a - test_b){
        count += 1;
    }
    else {
        console.log("sub is not assigned correctly.");
    }
  
    //Multiplication test
    if(mul === test_a * test_b){
        count += 1;
    }
    else {
        console.log("mul is not assigned correctly.");
    }
  	
    //Divison test
    if(div === test_a / test_b){
        count += 1;
    }
    else {
        console.log("div is not assigned correctly.");
    }

    //Increment test
    test_a++;
    if(inc === test_a){
        count += 1;
    }
    else {
        console.log("inc is not assigned correctly.");
    }
    
    //Decrement test
    test_b--;
    if(dec === test_b){
        count += 1;
    }
    else {
        console.log("dec is not assigned correctly.");
    }
    
  	if(count === 6){
  		console.log("You have done it correctly.");
    } else {
        console.log("Incorrect Code!");
    }
		   
}
catch(err) {
    console.log(err.message);
}

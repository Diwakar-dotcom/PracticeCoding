// Separate Odd and Even Numbers
/*
Separate and print odd and even numbers from an array.

Example 1
Input: 5
       5 8 3 9 2
Output:
Even Numbers: 8 2 
Odd Numbers: 5 3 9 

--> Even numbers: divisible by 2, Odd numbers: not divisible by 2
*/


const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here
let oddNum = "";
let evenNum = "";

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNum += arr[i] + " ";
    } else {
        oddNum += arr[i] + " ";
    }
}

console.log("Even Numbers:", evenNum);
console.log( "Odd Numbers:", oddNum);
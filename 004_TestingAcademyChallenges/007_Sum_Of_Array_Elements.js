// Sum of Array Elements

/*
Calculate and print the sum of all elements in an array.

Example 1

Input: 4
       1 2 3 4
Output: 10

--> Sum of all elements: 1+2+3+4=10
*/

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

console.log(sum);
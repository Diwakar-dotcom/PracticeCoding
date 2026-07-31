//Find Maximum in Array
/*
Find and print the maximum element in an array of integers.
Example 1
Input: 4
       10 5 8 3
Output:10
*/

const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

// Write your solution here
arr.sort();
console.log(arr[arr.length - 1]);
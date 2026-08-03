// Find Second Largest Number

/**
 * Find and print the second largest number in an array.

Example 1
    Input: 5
           5 8 3 9 1
    Output: 8

--> Largest is 9, second largest is 8
 * 
 */

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

arr.sort();
for (let i = arr.length-1; i >= 0; i--) {
    if (arr[i] !== arr[i - 1]) {
        console.log(arr[i - 1]);
        break;
    }
}
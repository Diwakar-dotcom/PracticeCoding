// Find Smallest Element in Array
/*
Find and print the smallest element in an array of integers.
Input: 5
       5 3 8 1 9
Output: 1

    The smallest number in the array is 1
*/

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here
arr.sort();
console.log(arr[0]);
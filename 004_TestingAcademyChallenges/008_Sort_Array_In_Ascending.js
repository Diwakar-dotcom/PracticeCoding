// Sort Array in Ascending Order

/*
Sort and print the array elements in ascending order.

  Example 1
  Input: 5
         9 2 7 1 5
  Output: 1 2 5 7 9

--> Elements arranged from smallest to largest
  
 */

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

arr.sort();

let sortedArr = "";

for (let i = 0; i < arr.length; i++) {
    sortedArr += arr[i] + " ";
}
console.log(sortedArr);
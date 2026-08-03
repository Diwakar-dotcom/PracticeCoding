/** Find Second Smallest Number
 * Find and print the second smallest number in an array.

Example 1
    Input: 5
           9 2 7 1 5
    Output: 2
--> Smallest is 1, second smallest is 2
 */

const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

arr.sort();

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        console.log(arr[i + 1]);
        break;
    }
}
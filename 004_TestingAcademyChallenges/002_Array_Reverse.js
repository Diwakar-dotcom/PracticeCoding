// Reverse Array Elements

/*
Print the elements of an array in reverse order.

Input: 3
       10 20 30
Output: 30 20 10

--> Elements printed from last to first
*/

// const data = require('fs').readFileSync(0, 'utf8');
// const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
// const n = tokens[0];
// const arr = tokens.slice(1, 1 + n);


// Write your solution here
let arr = [1,2,3,6,4,5];
arr.reverse();
let reverseArray = "";
for (let i = 0; i < arr.length; i++) {
    reverseArray += arr[i]+" "; // I have utilised this string concatenation because expected output was like this - if expected output in this [] format than I will directly print it.
}

console.log(reverseArray); // 5 4 6 3 2 1 
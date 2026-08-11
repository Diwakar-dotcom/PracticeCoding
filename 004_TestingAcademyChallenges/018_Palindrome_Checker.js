/** Palindrome Checker
 * Write a program to check if a given string is a palindrome (reads the same forwards and backwards).
 Example 1
    Input: madam
    Output: YES
--> madam reads the same forwards and backwards
 */

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}

if (str === revStr) {
    console.log("YES");
} else if(str !== revStr){
    console.log("NO");
}
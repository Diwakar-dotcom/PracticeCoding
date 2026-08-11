/** String Reverse
 * Write a Java program to reverse a given string.

Example 1
    Input: Java
    Output: avaJ
---> Each character is taken from end to beginning

 */

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
let revStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}

console.log(revStr);
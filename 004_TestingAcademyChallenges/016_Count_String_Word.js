/** Count Words in String
 * Write a program to count the number of words in a given string.

Example 1
    Input: Java Programming Language
    Output: 3
---> Three separate word
 */

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
let countStr;

countStr = str.split(" ");  
console.log(countStr.length);
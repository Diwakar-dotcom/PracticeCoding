/** First Letter of Each Word
 * Extract and print the first letter of each word in a string.
Example 1
    Input: Java Programming Language
    Output: JPL
---> First letter of each word: J, P, L
 */

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here
let firstWordOfStr = "";
let strArr = str.split(" ");

for (let i = 0; i < strArr.length; i++) {
    firstWordOfStr += strArr[i][0];
}

console.log(firstWordOfStr);
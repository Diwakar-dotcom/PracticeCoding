/** Remove All White Spaces
 * Write a program to remove all white spaces from a given string.

Example 1
    Input: Hello World Java
    Output: HelloWorldJava
---> All whitespace characters removed

*/

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0];
// Write your solution here

let strWithoutSpace = str.split(" ").join("");
console.log(strWithoutSpace);
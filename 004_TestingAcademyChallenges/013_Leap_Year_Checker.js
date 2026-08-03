/** Leap Year Checker
 * Write a program to check if a given year is a leap year. A leap year is divisible by 4, except for century years which must be divisible by 400.

Example 1
    Input: 2023
    Output: NO
--> 2023 is not divisible by 4
 
 */

const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

let year = data;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    console.log("YES");
} else {
    console.log("NO");
}
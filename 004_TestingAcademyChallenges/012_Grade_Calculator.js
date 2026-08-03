/** Grade Calculator
 * Calculate the letter grade based on a numeric score. A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60.

Example:
    Input: 85
    Output: B
--> Score 85 falls in the B range (80-89) 
 */

const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

const score = data;

if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else if (score >= 70) {
    console.log("C");
} else if (score >= 60) {
    console.log("D");
} else {
    console.log("F");
}
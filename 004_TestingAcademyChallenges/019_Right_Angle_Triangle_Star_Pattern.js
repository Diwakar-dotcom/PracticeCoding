/** Right Triangle Star Pattern
 * Print a right triangle pattern using stars. For input n, print n rows where row i has i stars.

Example 1
    Input: 3
    Output:
    *
    **
    ***

---> Row 1 has 1 star, row 2 has 2 stars, row 3 has 3 stars
 */

const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*"); // this method will print without new line
    }
    console.log();
}
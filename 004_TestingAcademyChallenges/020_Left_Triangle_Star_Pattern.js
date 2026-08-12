/** Left Triangle Star Pattern
 * Print a left-aligned triangle pattern. For input n, print n rows in reverse order.
Example 1
    Input: 3
    Output:
    ***
    **
    *
---> Reverse triangle pattern
*/

const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here
for (let i = n-1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
        process.stdout.write("*");
    }
    console.log();
}

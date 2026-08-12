/** Pyramid Pattern
 * Print a pyramid pattern using stars. For input n, print n rows where row i has (n-i) leading spaces and (2*i-1) stars.
Example 1
    Input: 3
    Output:
      *
     ***
    *****
--> Centered pyramid pattern 
*/

const data = require('fs').readFileSync(0, 'utf8');
const n = parseInt(data.trim(), 10);
// Write your solution here

for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i-1; j++) {
        row += " ";
    }

    for (let k = 0; k < i * 2 + 1; k++) {
        row += "*";
    }
    console.log(row); // This line will print the new along with star
}
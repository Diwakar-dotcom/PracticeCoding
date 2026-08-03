/** FizzBuzz
 * Print numbers from 1 to n. For multiples of 3, print 'Fizz'. For multiples of 5, print 'Buzz'. For multiples of both 3 and 5, print 'FizzBuzz'.

    Example:
        Input: 15
        Output:
                1
                2
                Fizz
                4
                Buzz
                Fizz
                7
                8
                Fizz
                Buzz
                11
                Fizz
                13
                14
                FizzBuzz
 * 
 */

const data = require('fs').readFileSync(0, 'utf8');
// Write your solution here

for (let i = 1; i <= data; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
        continue;
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
        continue;
    } else {
        console.log(i);
    }
}
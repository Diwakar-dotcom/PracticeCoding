// Count Vowels and Consonants
/*
Write a program to count the number of vowels and consonants in a given string.

Example 1
Input: Programming
Output:
Vowels: 3
Consonants: 8
Vowels: o,a,i and Consonants: P,r,g,r,m,m,n,g

Example 2
Input: Hello World
Output:
Vowels: 3
Consonants: 7
*/

const data = require('fs').readFileSync(0, 'utf8');
const str = data.split('\n')[0].toLowerCase();
// Write your solution here
function alphabetCheck(str) {
    if (/^[A-Za-z]$/.test(str)) {
        return true;
    }
    return false;
}

let vCount = 0;
let cCount = 0;
let vowels = "aeiou";

for (let i = 0; i < str.length; i++) {

    if (alphabetCheck(str[i])) {
        if (vowels.includes(str[i])) {
            vCount++;
        } else  {
            cCount++;
        }
    }
}

// console.log("Vowels:", vCount, "Consonants:", cCount);

console.log("Vowels:", vCount);
console.log("Consonants:", cCount);
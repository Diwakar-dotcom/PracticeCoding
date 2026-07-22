/*
Task

You are given a variable marks. Your task is to print:

- AA if marks is greater than 90.
- AB if marks is greater than 80 and less than or equal to 90.
- BB if marks is greater than 70 and less than or equal to 80.
- BC if marks is greater than 60 and less than or equal to 70.
- CC if marks is greater than 50 and less than or equal to 60.
- CD if marks is greater than 40 and less than or equal to 50.
- DD if marks is greater than 30 and less than or equal to 40.
- FF if marks is less than or equal to 30.
*/

// MY PURPOSED SOLUTIONS:   

function processData(input) {
    var marks = Number(input);
    var MARKS_TEST = marks;
    //Head Ends Here

//Do not declare variable marks.
//Write your code below this line.
if (MARKS_TEST > 90) {
    console.log("AA");
} else if(MARKS_TEST > 80 && MARKS_TEST <= 90){
    console.log("AB")
} else if(MARKS_TEST > 70 && MARKS_TEST <= 80) {
    console.log("BB");
} else if(MARKS_TEST > 60 && MARKS_TEST <= 70) {
    console.log("BC");
} else if(MARKS_TEST > 50 && MARKS_TEST <= 60) {
    console.log("CC");
} else if(MARKS_TEST > 40 && MARKS_TEST <= 50) {
    console.log("CD");
} else if(MARKS_TEST > 30 && MARKS_TEST <= 40) {
    console.log("DD");
} else if(MARKS_TEST <= 30) {
    console.log("FF");
}
//Tail Begins
    try {
        if(marks != MARKS_TEST){
            console.log("It seems you have edited the value of variable 'marks'. Please try again.");
        } 
    } 
    catch(err) {
        console.log(err.message);
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
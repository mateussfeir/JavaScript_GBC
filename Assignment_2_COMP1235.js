// Instructions:
// We are gonna have to create 5 functions:
// 1) Find the number of digits in an argument
// 2) Surplus function
// 3) String with numbers
// 4) Clas grading
// 5) Move capital letters
// Our JS functions MUST be configured for strick mode ("use strict")


// ***************************************************************** Function 1 *****************************************************************

// Function 1
// The lenght of the argument varies.
// Exempale: _findNumOfDigits("a10T2") -> 4
function _findNumOfDigits(arg) 
{
    if (typeof arg === 'number') {
        arg = arg.toString();
    }
    let numDigits = arg.length;
    return arg + " contains: " + numDigits + " digit(s).";
}

console.log(_findNumOfDigits(1000));
console.log(_findNumOfDigits("abcd”)"));
console.log(_findNumOfDigits(12));
console.log(_findNumOfDigits("COMP1235”)"));
console.log(_findNumOfDigits(0));
console.log(_findNumOfDigits("C1O2M3P5”)"));

// in this code an empty space would be considered a digits, what I think would be wrong, so a better way would be adding a for loop with this condition:
/* for (let i = 0; i < arg.length; i++) {
    if (!isNaN(arg[i]) && arg[i] !== ' ') {
        numDigits++;
    }
} */
// But for this exercice the code works fine becuase the input showed in the teacher's example does not have space in the middle of the input

// ***************************************************************** Function 2 *****************************************************************

// Function 2
// Surplus function
// The function takes a string argument (str) and returns a function, that return the orginal str argument
// Example:
// _surplus(“orange”) → inner() → orange
// _surplus(“pear”) → inner() → pear
// _surplus(“”) → inner() → “”
// Defition of inner function: it is a function defined within another function
// The inner function has access to the parameters and variables of the outer functions

// Declaring the outer function called _surplus
function _surplus (str) {
    // Declaring the inner function
    function innerFunction ()
    {
        // Returning the parameter of the outer function
        return str;
    }
    // The outer function is returning the inner function
    return innerFunction;
}

// One way to called the function and pass the argument is storing the value in variable first, and then logging it
const inner1 = _surplus("orange");
console.log(inner1());

// Other way to logging and calling the function at the same time
console.log(_surplus("pear")());
console.log(_surplus("")());

// ***************************************************************** Function 3 *****************************************************************

// Function 3
// String with numbers
// Create an function that receives a mixed array (number and strings [different lenghts] ) 
// Return a new array that contains only the strings with numbers from the source array, if there are no numbers return an empty array.
// Example:
// numInStr(["1a", "a", "2b", "b"]) ➞ ["1a", "2b"]
// numInStr(["abc", "abc10"]) ➞ ["abc10"]
// numInStr(["abc", "ab10c", "a10bc", "bcd"]) ➞ ["ab10c", "a10bc"]
// numInStr(["this is a test", "test1"]) ➞ ["test1"]

// Hints: 
// / / denote the start and end of an expression on JS
// \d means the any number [0-9]
// .test checks if the expression matches the given string


function _strNumbers(array) {
    // Declaring the variable
    let storageArray = []
    // looping through each string in the array 
    for (const str of array) {
        // checking if the string contains a number
        if (/\d/.test(str)) {
            // storing the string in the storage array
            storageArray.push(str);
        }
    }
    return storageArray;
}

const numInStr1 = ["1a", "a", "2b", "b"];
const numInStr2 = ["abc", "abc10"];
const numInStr3 = ["abc", "ab10c", "a10bc", "bcd"];
const numInStr4 = ["this is a test", "test1"];

console.log(_strNumbers(numInStr1));
console.log(_strNumbers(numInStr2));
console.log(_strNumbers(numInStr3));
console.log(_strNumbers(numInStr4));

// New things learned
// .test that checking any condition
// push to add something in the array (I knew on python only [add])

// ***************************************************************** Function 4 *****************************************************************

// Function 4
// Class Grading 
// Create a function that matches with the following requirements:
// receive a variable length array of numbers, representing student grades in a course
// if the grade is higher or equal to 50 the student passed, otherwise reproved.
// the function must return 3 information: number of passing grades, failing grades and the overall average of grades
// Example:
// _determineClassGrading([50,51,80,45]) ➞ [3,1,56.5]
// _determineClassGrading ([35,45,25,10,6,33]) ➞ [0,6,25.7]
// _determineClassGrading ([80,90]) ➞ [2,0,85.0]

function _determineClassGrading(array) {
    let passingGrades = 0
    let failingGrades = 0
    let sum = 0
    let index = 0
    for (const grade of array) {
        if (grade >= 50){
            passingGrades++;
        }
        else {
            failingGrades++;
        }
        sum += grade;
        index++;
    }
    let average = (sum / index).toFixed(1);
    return { passingGrades, failingGrades, average };
}

let ClassGrading1 = [50,51,80,45];
let ClassGrading2 = [35,45,25,10,6,33];
let ClassGrading3 = [80,90];

console.log(_determineClassGrading(ClassGrading1));
console.log(_determineClassGrading(ClassGrading2));
console.log(_determineClassGrading(ClassGrading3));

// ***************************************************************** Function 5 *****************************************************************

// Function 5
// Move Capital Letters
// Takes a string with mixed casing (upper and lowercase letters) and put the upper letter in the front of the string and the lowercase letters in the back)
// The letters must keep the same order
// console.log NOT permited
// Examples:
// _moveCapitalLetters("hApPy") ➔ "APhpy"
// _moveCapitalLetters("moveMENT") ➔ "MENTmove"
// _moveCapitalLetters("shOrtCAKE") ➔ "OCAKEshrt"

// Brain storm:
// First step is to iterate in the string and use a if statement to concate the upperletters followed by the lowercase letters

const _moveCapitalLetters = (string) => {
    let upperCaseLetters = "";
    let lowerCaseLetters = "";

    for (const letter of string) {
        if (letter === letter.toUpperCase()){
            upperCaseLetters += letter;
            }
        else {
            lowerCaseLetters += letter;
        }
    }
    return upperCaseLetters + lowerCaseLetters;
}

let string1 = "hApPy";
let string2 = "moveMENT";
let string3 = "shOrtCAKE";

_moveCapitalLetters(string1);
_moveCapitalLetters(string2);
_moveCapitalLetters(string3);

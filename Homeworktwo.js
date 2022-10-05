// Additional assignments for Day 3

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = 7;
let gender;

isMale >= 5 ? (gender = "You are male") : (gender = "You are female");

console.log(gender);

/* WRITE YOUR ANSWER HERE */

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

number1 = 8;
number2 = 5;

isThereEight = console.log(number1 === number2);

/* WRITE YOUR ANSWER HERE */

/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let text1 = "dog";
let text2 = "octopus";
let result = text1 + text2;

console.log(result);

/* WRITE YOUR ANSWER HERE */

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

const points = [13, 854, 37];
points.sort(function (a, b) {
  return b - a;
});

console.log(points.sort);

/* WRITE YOUR ANSWER HERE */

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

x1 = 57;
x2 = 835;

averageOfTwo = (x1 + x2) / 2;

console.log(averageOfTwo);

/* WRITE YOUR ANSWER HERE */

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

/* WRITE YOUR ANSWER HERE */

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

// expected output: "Does NOT fit!"

/* WRITE YOUR ANSWER HERE */

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

numberGiven = 500;

calculation = (numberGiven / 100) * 37;

console.log(calculation);

/* WRITE YOUR ANSWER HERE */

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

console.log(
  " \n Exercise 1 - explanation for datatypes can be found in comments"
);

santaExists = false; /* Boolean type that are either TRUE or FALSE */

spaghettiBowl =
  null; /* null type represents the intentional absence of any object value */

whatsForDinnerTonight =
  undefined; /* a variable that has not been assigned a value has the value undefined */

age = 83; /* Number type it can only safely store integers in the range -(2^53 − 1) to 2^53 − 1 */

novel = "I write text here - this is called a string";

arithmeticFail =
  NaN; /* not a number is encountered when the result of an arithemtic operation cannot be expressed as a number */

accumulativeProperties =
  age + novel; /*OBJECT type - made up of a collection of properties */

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

console.log(
  "\n  Exercise 2 \n Variables contain and store data (values) and can be declared in 4 ways: \n 1 - Using var \n 2 - Using let\n 3 - Using const\n 1 - Using nothing "
);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

rainMan = 12 + 20;
console.log("\n Exercise 3 \n", rainMan);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let x = 12;
console.log("\n Exercise 4 \n", x);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

console.log("\n Exercise 5 \n", name);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

calculator = 12 - x;
console.log("\n Exercise 6 \n 12 - x", calculator);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

name1 = "john";
name2 = "John";

console.log("\n Exercise 7 \n Equality", name1 === name2);

caseSensitive = name2.toLowerCase();

if (caseSensitive === name1)
  console.log("Both lowercase", caseSensitive === name1);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

x = 8;
let text = x.toString();

console.log("\n Exercise 8 \n x is the number 8", text);

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let howOld = 18;
let message;

howOld >= 16 ? (message = "You can drive.") : (message = "You cannot drive.");

console.log(
  "\n Exercise 9 extra - \n This is the output for a person 18 years of age:",
  message
);

/* WRITE YOUR ANSWER HERE */

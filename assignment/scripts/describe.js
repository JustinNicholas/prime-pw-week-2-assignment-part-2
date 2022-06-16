// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called name and set it qual to 'Dane' as a string.
// We ask if name is an exact match of Mary. Dane does not match Mary.
// We then go to the else and console log 'How do you do?'.
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable called secret and don't set a value.
// We create a variable called code and set it to 123 as a number.
// We check if code equals 123. Code is set to 123 and is an exact match, So
// we set the value of secret to super and change the value of code to equal
// its previous value by 2. Code now equals 246.
// We then check if code is greater that 250. Code is currently 246 so it does
// not change the value of code to duper.
// We then console log the value of secret and would get an answer of 'super'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We create a variable called isStudent and set the value to true as a boolean.
// We create a variable called age and set the value to 34 as a number.
// We create a variable called zip and set the value to 55407 as a number.
// We check if isStudent is an exact match of true AND if zip is greater than 80000.
// zip is less than 80000 so we move to the next conditional
// We check if isStudent is an exact match of false AND if age is less than 30.
// Our data fails both conditionals so we move to the next.
// We cheeck if isStudent is an exact match of true. It is, so we console log
// 'Welcome to Prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - Change the value of colorOne to 'blue' and the value of colorTwo to 'red' to match instructions.
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
// FIX - We need to add another line that changes the value of colorTwo to 'purple' as well to match instructions.
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
// FIX - Time is a changing variable and should be a 'let' variable instead of a 'const' variable.
const time = 4;

// FIX - This check if either of the conditions is true. The || should be replaced with && to check if both are true.
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the variable we are checking should be first. This should be if(age >= minAge){console.log('enter');} else {console.log('no entry');}
// This currently would say no entry since age set to 21 and 21 is equal to minAge.
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/


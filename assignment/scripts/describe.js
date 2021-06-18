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

/*  First, we create a varible named 'name' and assign it the string value of
    'Dane'. We then write a conditional code block using an if/else statement.
    The statement says that if the variable 'name' is equal to 'Mary' then we
    console.log 'Hi, Mary!', otherwise we console.log 'How do you do?'.
*/

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

/*  First, we create a variable named 'secret' but we do not assign it a value.
    Next, we creat a second variable named 'code' and assign it the numerical
    value of 123. Our next step is to write a conditional if statement saying
    that if the variable 'code' is equal to 123 then the variable secret gets
    assigned the string value 'super' and the variable 'code' gets multiplied
    by two which would equal 246. We then write another conditional if statement
    that says if the variable 'code' is now greater than the numerical value
    250, the variable 'secret' would then be assigned the string value of 'duper'.
    Since the variable 'code' is now equal to 246, the second if statement does
    mot execute and our last step is to console.log the final value of 'secret'
    which is the string 'super'.
*/

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

/*  We first create a variable named 'isStudent' and assign it the boolean value
    of true. We then create a second variable named 'age' and assign it the
    numerical value of 34. We also create a third value named 'zip' and assign
    it the numerical value of 55407. We then write a conditional code block using
    if/else if/else statements. We first use a compound conditional to say that
    if 'isStudent' is equal to true AND 'zip' is equal to 80000, then we console.log
    'You're a student on the West Coast!'. We then use another compound conditional
    to say that if 'isStudent' is equal to false OR 'age' is less than 30, we console.log
    'What are your hobbies?'. Our next conditional statement simply says that if
    'isStudent' is equal to true we console.log 'Welcome to Prime!'. And finally,
    our last conditional else statement says that if none of the other
    conditionals execute we will console.log the phrase 'How about the weather?'.
    The final result would be that the first and second conditionals would get skipped,
    the third conditional would execute displaying 'Welcome to Prime!' and the
    fourth conditional would never execute in this scenario.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
}
else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
}
else if (isStudent === true) {
  console.log('Welcome to Prime!');
}
else {
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

// FIX - colorOne should be assigned the value 'blue' and colorTwo should be assigned
//       the value 'red'.

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Both colorOne and colorTwo sahould be set to 'purple'.

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - the OR operator (||) in the compound conditional phrase should be set to
//       AND (&&)

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

// FIX - The conditional inside the parentheses for the if statement should look
//        like (age >= minAge)

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

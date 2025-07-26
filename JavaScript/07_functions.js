// 12. FUNCTIONS
// EXPLANATION: Functions are reusable blocks of code that perform a specific task.

/* 

Syntax:

function functionName(){
    // code to be executed
}
functionName(); // calling the function

*/

// function callingUsername() {

//     console.log('Hello');

// }

// callingUsername(); // This will call the function and execute the code inside it




// let userDetails = {
//     userName: 'Santhosh',
//     userAge: 25,
// }

// function callingUsername() {
//     console.log(`Hello ${userDetails.userName}, your age is ${userDetails.userAge}!`); 
// }

// callingUsername(); // This will call the function and execute the code inside it
// callingUsername(); // We can call the function multiple times to execute the same code again and again
// callingUsername();



// FUNCTION WITH PARAMETERS

/*

Syntax:

function functionName(parameter1, parameter2, ...){
    // code to be executed
}
functionName(argument1, argument2, ...); // calling the function with arguments

*/

// function callingUsername(userName, userAge) {
//     console.log(`Hello ${userName}, your age is ${userAge}!`); 
// }

// callingUsername("Santhosh", 25); // This will call the function with arguments and execute the code inside it
// callingUsername("John", 30); // We can call the function with different arguments to execute the same code with different values
// callingUsername("Alice", 22);
// callingUsername("Bob", 28);


// FUNCTION DEFAULT PARAMETERS ARGUMENTS

/*

Syntax:

function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2, ...){
    // code to be executed
}
functionName(argument1, argument2, ...); // calling the function with arguments

*/

// function callingUser(userName = "Guest", userAge = 25) {
//     console.log(`Hello ${userName}, your age is ${userAge}!`); 
// }
// callingUser(undefined, 30); // This will call the function with default parameters and execute the code inside it
// callingUser("John", 30); // We can call the function with different arguments to execute the same code with different values
// callingUser("Alice"); // We can also call the function with only one argument, the other will take the default value
// callingUser(); // This will call the function with default parameters and execute the code inside it
// callingUser("Bob", undefined); // This will call the function with default parameters and execute the code inside it


// FUNCTION RETURN TYPE 

/* 

Syntax:

function functionName(parameter1, parameter2, ...){
    // code to be executed
    return value; // returning a value from the function
}

*/

// function findAreaOfRectangle(l, b){
//     console.log(`Calculating area for rectangle with length ${l} and breadth ${b}`); //this will print
//     return l * b; // This will return the area of the rectangle
//     console.log(`This line will not be executed because it is after the return statement`); // This line will not be executed because it is after the return statement
// }

// let result = findAreaOfRectangle(5, 10); // This will call the function and store the returned value in the variable
// console.log(`The area of the rectangle is ${result}`); // This will print the area of the rectangle


// function findCubic(cubic){
//     // return (cubic ** 3, "SanZ", undefined, null, 3); //this will return 3, because the last value is the only one that is not falsy
//     return (cubic ** 3); 
// }

// let result = findCubic(5); // This will call the function and store the returned value in the variable
// console.log(`The cubic of the number is ${result}`); // This will print the cubic of the number



// FUNCTION NON-RETURN TYPE

/*

Syntax:

function functionName(){
    // code to be executed
}
functionName(); // calling the function

*/

// function nonReturnType() {
//     console.log("This function does not return any value, it just executes the code inside it.");
// }
// // nonReturnType(); // This will call the function but it will not return any value

// let result = nonReturnType(); // This will call the function but it will not return any value, so result will be undefined
// console.log(`The result of the non-return type function is ${result}`); // This will print undefined because the function does not return any value


// function nonReturnType() {
//     console.log("This function does not return any value, it just executes the code inside it.");
//     return "Santhosh"; // This will return a value, but it is not used anywhere
// }
// // nonReturnType(); // This will call the function but it will not return any value

// let result = nonReturnType(); // This will call the function but it will not return any value, so result will be undefined
// console.log(`The result of the non-return type function is ${result}`); // This will print the value returned by the function, which is "Santhosh" in this case
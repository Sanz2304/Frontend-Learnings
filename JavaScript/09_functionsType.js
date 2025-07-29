// 14. FUNCTIONs TYPE:

// A. NAMED FUNCTION

// function namedFunction(){
//     console.log("Named Function");
// }
// namedFunction();

// function namedFunction1(userName){
//     console.log(`Hello ${userName}`);
// }
// namedFunction1('Santhosh');


// -------------------


// B. ANONYMOUS FUNCTION:

// let unNamedFunction = function (){
//     console.log("Anonymous Function");
// }
// console.log(unNamedFunction); // [Function: unNamedFunction]
// unNamedFunction(); // Anonymous Function

// let unNamedFunction = function (a, b){
//     console.log(`Anonymous Function` + (a + b));
// }
// console.log(unNamedFunction); // [Function: unNamedFunction]
// unNamedFunction(10,20); // Anonymous Function30


// -------------------


//  C. ARROW FUNCTION:

// let arrowFunc = () => {
//     console.log("Arrow Function");
// }
// arrowFunc(); // Arrow Function

// let arrowFunc = (a, b) => {
//     console.log("Arrow Function" + (a * b));
// }
// arrowFunc(10, 20); // Arrow Function200

// let arrowFunc = (a, b) => console.log("Arrow Function" + (a * b));
// arrowFunc(10, 20); // Arrow Function200

// let arrowFunc = a => console.log("Arrow Function" + (a));
// arrowFunc(10); // Arrow Function10


// -------------------



//Return Function:

//Normal Return Function using arrow function:
// let firstname = "Santhosh";
// let userNameDetails = (fname) => {
//     return fname;
// }
// userNameDetails(firstname); // Santhosh


// -------------------


// Simplified Return function arrow function:

// let firstname = "Santhosh";
// let userNameDetails = fname => fname; // No brackets and return keyword needed
// let res = userNameDetails(firstname);
// console.log(res); //Santhosh


// -------------------


// D. HIGHER ORDER FUNCTION:
// Explaination: Higher order function is a function that takes a function as an argument or returns a function.

// function highOderFunc(){
//     console.log("This is High Order Function!");
// }

// function callbackFunc() {
//     console.log("This is callback Function!");
// }

// // highOderFunc(callbackFunc()); //This is callback Function! This is High Order Function!
// callbackFunc(highOderFunc()); // This is High Order Function! This is callback Function!


// -------------------



function add(callback, a, b){
    console.log(a + b);
    callback(20, 5)
}

function subract(num1, num2){
    console.log(num1 - num2);
}

add(subract, 10, 20);

/*
Callback Functions:

Certainly! A callback function in JavaScript is a function that is passed into another function as an argument to be executed later. Here are several examples demonstrating how callback functions can be used:

function handleGoodBye(myName) {
  setTimeout(() => {
    console.log('GoodBye ' + myName)
  }, 3000)
}

function greetUser(name, callback) {
  const myName = name.toUpperCase()

  console.log('My name is ' + myName)

  callback(myName)
}

greetUser('Anbu', handleGoodBye)


Another Example

const medicine = () => {
  console.log(`D: You will be alright! Take these medicines. Take Care`)
}

const doSomeWork = () => {
  setTimeout(medicine, 3000)
}

const callDoctor = (callerName, doSomeWork) => {
  console.log(`D: Hi ${callerName} I'm the doctor, how can i help you?`)

  doSomeWork()
}

function help(name) {
  console.log('U: Hello ' + name)

  setTimeout(callDoctor, 1000, name, doSomeWork)
}

// help('Anbu')

help('Trisha')


1. Simple Callback Example

function greet(name, callback) {
  console.log('Hello ' + name)
  callback()
}

function sayGoodbye() {
  console.log('Goodbye!')
}

greet('Anbu', sayGoodbye)
// Output:
// Hello Anbu
// Goodbye!

2. Using Callbacks with Array Methods

`forEach`

const array = [1, 2, 3, 4, 5]

array.forEach(function (element) {
  console.log(element)
})
// Output: 1 2 3 4 5

`map`

const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(function (num) {
  return num * 2
})

console.log(doubled)
// Output: [2, 4, 6, 8, 10]


3. Callback in Asynchronous Functions

Using `setTimeout`

function sayHello() {
  console.log('Hello!')
}

setTimeout(sayHello, 1000)
// Output after 1 second: Hello!

Using Promises

javascript
function asyncFunction(callback) {
  setTimeout(function () {
    console.log('Async operation completed.')
    callback()
  }, 2000)
}

function callbackFunction() {
  console.log('Callback function executed.')
}

asyncFunction(callbackFunction)
// Output after 2 seconds:
// Async operation completed.
// Callback function executed.

4. Callback with Event Listeners

document.getElementById('myButton').addEventListener('click', function () {
  alert('Button was clicked!')
})


5. Callback in jQuery

$(document).ready(function () {
  $('#myButton').click(function () {
    alert('Button was clicked!')
  })
})

6. Chaining Callbacks

// Chaining Callbacks

function first(callback) {
  setTimeout(() => {
    console.log('running: first')

    callback()
  }, 3000)
}

function second(callback) {
  setTimeout(() => {
    console.log('running: second')

    callback()
  }, 3000)
}

function third() {
  setTimeout(() => {
    console.log('running: third')
  }, 3000)
}

first(() => second(() => third()))

// second()

// third()

These examples cover various scenarios where callback functions are commonly used in JavaScript, ranging from simple function calls to handling asynchronous operations and event handling.

*/
// Function Constructor - This is a way to create a function in JavaScript.
// It is not a good practice to use this method to create a function.
// It is better to use the function declaration or function expression to create a function.
// This is because the function constructor is not a good way to create a function.

// Function Constructor
const newFunction = new Function('return `Santhosh Kumar`')
// console.log(newFunction()); // Santhosh Kumar


const newFunction1 = new Function('return `Santhosh Kumar`, 10+20')
// console.log(newFunction1()); // 30 This will return only 30, because 10+20 is last statement in the function.


const newFunction2 = new Function('return `Santhosh Kumar, ${10+20}` ')
// console.log(newFunction2()); // Santhosh Kumar, 30



//Getting Arguments from a function constructor

// Function Declaration - Normal Function
function greetUser(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log( greetUser('Santhosh', 'Kumar'));

// Function Constructor
const newFunction3 = new Function('firstName', 'lastName', 'return `${firstName} ${lastName}` ')
// console.log(newFunction3('Santhosh', 'Kumar'));

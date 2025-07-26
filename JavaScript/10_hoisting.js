//15. HOISTIG
// Explaination: Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

// VARIABLE HOISTING:

// VAR:
// console.log(a); // undefined
// var a = 1;
// console.log(a); // 1

// LET:
// console.log(b); // ReferenceError: b is not defined
// let b = 2;
// console.log(b); // 2

// CONST:
// console.log(c); // ReferenceError: c is not defined
// const c = 3;
// console.log(c); // 3

// ---------------------

// FUNCTION HOISTING

// someFunc(); // Function
// function someFunc(){
//     console.log('Function');
    
// }
// someFunc(); // Function

// ---------------------

// Anonymous Function

// LET:
// anoynmous(); // ReferenceError: Cannot access 'anoynmous' before initialization
// let anoynmous = function() {
//     console.log('Anonymous Function');
// }
// anoynmous(); // Anonymous Function


// VAR:
/* In top it will decalre like:
anonymous
console.log(anonymous); //undefind
*/

anoynmous(); // TypeError: anoynmous is not a function. Because, it will be undefined and it will consider as a variable. we are tryin to change it to function.
var anoynmous = function() {
    console.log('Anonymous Function');
}
anoynmous(); // Anonymous Function

// 13. FUNCTION VARIABLE SCOPE
// VAR - Function scope
// Explaination: Var is a function scope variable. It is accessible to all the functions within the same file/function.

// function outerVariableFunction() {
// var funcVariable1 = 'Some Variable 1'
//   if(true) {
//     var funcVariable = 'Some Variable'
//     console.log(funcVariable); // accesible with the block scope
//   }
//  console.log(funcVariable); // accessile with the block scope within the function
//  console.log(funcVariable1); // accessile with the block scope within the function
// }
// outerVariableFunction();


// -------------------



// LET and CONST - Block scope
// Explaination: Let and const are block scope variables. It is accessible to all the functions within the same file/function.

// function blockedScope(){
//     let insideBlockLine = "I'm a block scoped variable";
//     if(true){
//         let insideBlockLine1 = "I'm a block scoped variable 1";
//         const constVariable  = "I'm Inside block";
//         console.log(insideBlockLine); // we can access this let inside block
//         console.log(insideBlockLine1); // we can access this let inside block
//         console.log(constVariable); // we can access this const inside block
//     }
//     // console.log(insideBlockLine); // we can access this let inside block because its outside block.
//     // console.log(insideBlockLine1); // we can't access this let inside block
//     // console.log(constVariable); // we can't access this const inside block
// }
// blockedScope();


// -------------------


// GLOBAL SCOPE 
// Explaination: Global scope is the scope of the variable that is declared outside of the function. It is accessible to all the functions within the same file.

// var globalVariable = 'Global variable';
// let blockVariable = 'Block variable';
// const constantVariable = 'Constant variable';

// console.log(window.globalVariable);  // We can access global variable in the browser console
// console.log(window.blockVariable); // We can't access block variable in the browser console
// console.log(window.constantVariable); // We can't access block variable in the browser console


// -------------------



// GLOBAL VARIABLE and BLOCK VARIABLE - How to access them in a function (Scope Chain)

// var a = 10
// let b = 20
// const c = 30

// function accessGlobalLocalVariable() {
//   var a = 100
//   let b = 200
//   const c = 300

//   function innerFunction() {
//     var a = 1000
//     let b = 2000
//     const c = 3000

//     console.log(a, b, c); // 1000, 2000, 3000
//   }

//   innerFunction();
//   console.log(a, b, c); // 100, 200, 300
// }

// accessGlobalLocalVariable();

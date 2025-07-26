// 9. TYPE CONVERSION
// Type conversion is the process of converting a value from one data type to another. JavaScript provides several methods for type conversion, including implicit and explicit conversions.

// Implicit Type Conversion:
// Implicit type conversion occurs automatically when JavaScript converts one data type to another during operations. This is also known as type coercion.

let str = '10'
let num = 200

// console.log(str + num) // 10200
// console.log(typeof(str + num)); // string

//STRING

// console.log("hi" + true); // hitrue Boolean
// console.log("hi" + undefined); // hiundefined
// console.log("hi" + null); // hinull
// console.log("hi" + [1,2]); // hi1,2 // Array
// console.log("hi" + {}); // hi[object Object] //Object


//NUMBER

// console.log(10 + false); // 10 + 0 = 10 Boolean True = 1 False = 0
// console.log(10 + undefined) // NaN - Not a Number
// console.log(10 + null) // 10 + 0 = 10
// console.log(10 + [1,2]) // 101,2
// console.log(typeof(10 + [1,2])) // string
// console.log(10 + {}) // 10[object Object]
// console.log(typeof(10 + {})) // string
// console.log(10 + '') // 10
// console.log(typeof(10 + '')) // string

// BOOLEAN

// console.log(10 + true); // 10 + 1 = 11 Boolean True = 1 False = 0
// console.log(true + undefined); //NaN
// console.log(true + null); //1

// console.log(10 == '10') // true

// console.log(10 - 'abc') // NaN
// console.log(10 - '') // 10 - 0 = 10


// =======================================================================================================

// EXPLICIT CONVERSION:
// Explicit type conversion is when you manually convert a value from one type to another using built-in functions or methods.

// console.log(Number('10')); // 10
// console.log(typeof Number('10')); // number
// console.log(Number('')); // 0
// console.log(Number('abc')); // NaN
// console.log(Number(true)); // 1
// console.log(Number(false)); // 0
// console.log(Number(null)); // 0
// console.log(Number(undefined)); // NaN
// console.log(Number([1, 2])); // NaN
// console.log(Number([1])); // 1
// console.log(Number({})); // NaN
// console.log(Number([1, 2, 3])); // NaN

// console.log(Boolean('')); // false
// console.log(Boolean('abc')); // true
// console.log(Boolean(0)); // false
// console.log(Boolean(1)); // true
// console.log(Boolean(null)); // false
// console.log(Boolean(undefined)); // false
// console.log(Boolean([])); // false
// console.log(Boolean([1, 2])); // true
// console.log(Boolean({})); // true

// console.log(Boolean(Infinity)); // true
// console.log(Boolean(-Infinity)); // true
// console.log(Boolean(NaN)); // false

// console.log(String()); // ""















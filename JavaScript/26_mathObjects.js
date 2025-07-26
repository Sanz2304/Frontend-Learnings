// 26. MATH OBJECTS : Math Objects are used to do some math operations.

/* 

A. Math.abs()
B. Math.sign()
C. Math.ceil()
D. Math.floor()
E. Math.round()
F. Math.min()
G. Math.max()
H. Math.pow()
I. Math.sqrt()
J. Math.cbrt()
K. Math.trunc()
L. Math.random()
M. Math.log()

*/

// Math.abs() : It is used to return the absolute value of the number.

Math.abs(-10); // 10
Math.abs(10); // 10
Math.abs(0); // 0

// Math.sign() : It is used to return the sign of the number.

Math.sign(-10); // -1
Math.sign(10); // 1
Math.sign(0); // 0 

// Math.sqrt() : It is used to return the square root of the number.

Math.sqrt(16); // 4
Math.sqrt(0); // 0
Math.sqrt(-1); // NaN

// Math.cbrt() : It is used to return the cube root of the number.

Math.cbrt(27); // 3
Math.cbrt(0); // 0
Math.cbrt(-1); // NaN
Math.cbrt(1000); // 10


// Math.pow() : It is used to return the power of the number. It has 2 parameters base and exponent.

Math.pow(2, 3); // 8
Math.pow(2, 0); // 1
Math.pow(2, -1); // 0.5
Math.pow(2, 1/2); // 1.4142135623730951


// Math.min() : It is used to return the minimum value of the number. It has 2 parameters base and exponent.

Math.min(10, 20, 30); // 10
let arr = [10, 20, 30, 40, 50];
Math.min(...arr); // 10
Math.min(...arr, 100, 2, 1, -2) // -2 this will conside the arr and the rest of the numbers

// Math.max() : It is used to return the maximum value of the number. It has 2 parameters base and exponent.

Math.max(10, 20, 30); // 30
let arr1 = [10, 20, 30, 40, 50];
Math.max(...arr1); // 50
Math.max(...arr1, 100, 2, 1, -2) // 100 this will conside the arr and the rest of the numbers 



// Math.random() : It is used to return a random number between 0 and 1.

Math.random(); // 0.1234567890 Every time it will return a different number
// Math.random(10) // this won't accept any parameters
Math.random() * 10; // 0.1234567890 * 10 = 1.234567890
let random = Math.random() * 10;
random.toFixed(2); // 1.23 // toFixed is used to round the number to the specified number of decimal places



// Math.ceil() : It is used to return the smallest integer greater than or equal to a number.

Math.ceil(10.5); // 11
Math.ceil(10.4); // 11
Math.ceil(10.51); // 11
Math.ceil(-10.5); // -10
Math.ceil(-10.4); // -10
Math.ceil(-10.51); // -10


// Math.floor() : It is used to return the largest integer less than or equal to a number.

Math.floor(10.5); // 10
Math.floor(10.4); // 10
Math.floor(10.51); // 10
Math.floor(-10.5); // -11
Math.floor(-10.4); // -11
Math.floor(-10.51); // -11


// Math.trunc() : It is used to return the integer part of the number.

Math.trunc(10.5); // 10
Math.trunc(10.4); // 10
Math.trunc(10.51); // 10
Math.trunc(-10.55556666666778); // -10
Math.trunc(-10.4); // -10
Math.trunc(-10.51); // -10



// Math.round() : It is used to return the rounded value of the number.

Math.round(10.5); // 11
Math.round(10.4); // 10
Math.round(10.51); // 11
Math.round(-10.5); // -10
Math.round(-10.4); // -10
Math.round(-10.51); // -11



// Math.log() : It is used to return the natural logarithm of the number.

Math.log(10); // 2.302585092994046
Math.log(0); // -Infinity
Math.log(-1); // NaN
Math.log(1); // 0
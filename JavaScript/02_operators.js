// 7. OPERATORS

// (7A) ARITHEMATIC OPERATORS
// Arithmetic operators are used to perform mathematical operations on numbers. The most common arithmetic operators are addition (+), subtraction (-), multiplication (*), division (/), modulus (%), and exponentiation (**).

// console.log(5 + 3); // Addition: 8
// console.log(10 - 2); // Subtraction: 8
// console.log(4 * 2); // Multiplication: 8
// console.log(16 / 2); // Division: 8
// console.log(20 % 3); // Modulus: 2 (remainder of 20 divided by 3)
// console.log(2 ** 3); // Exponentiation: 8 (2 raised to the power of 3)    

// Increment

// let num = 5;
// num1 = 5 + 1; // Increment by 1
// console.log(num); // 6

let numI = 5;
numI++ // post-increment ==> num = num + 1 = 6
++numI // pre-increment ==> num = num + 1 = 7
// console.log(num); // 7

// Decrement

// let num = 5;
// num1 = 5 - 1; // decrement by 1
// console.log(num); // 4

let numD = 5;
numD-- // post-decrement ==> numD = numD - 1 = 4
--numD // pre-decrement ==> numD = numD - 1 = 3
// console.log(numD); // 3


// POST INCREMENT AND PRE INCREMENT
// The difference between post-increment and pre-increment is when the increment operation is applied in relation to the value being used in an expression.

// Post Increment

/* 

1. Substitue
2. Operation
3. Increment

*/

// let num = 5
// let num1 = num++; // num1 will be 5, num will be incremented to 6 after this line

//num1 = 5++
//num1 = 5; // num1 will be 5, num will be incremented to 6 after this line
// console.log(num1, num); // 5, 6


// Pre Increment

/* 

1. Substitue with incremented value
2. Operation

*/

// let newNum = 40

// let newNum1 = ++newNum; // newNum1 will be 41, newNum is incremented to 41 before this line
// newNum1 = ++40 = 1 + 40 = 

// let newNum2 = ++newNum + ++newNum; // newNum2 will be 83, newNum is incremented to 42 before this line
// newNum2 = 41 + 42 = 83
// newNum2 = 83; // newNum2 will be 83, newNum is incremented to 42 before this line

// console.log(newNum2, newNum); // 83, 42


// ===================================================================================================================================================


// (7B) ASSIGNMENT OPERATORS:
// Assignment operators are used to assign values to variables. The most common assignment operator is '=', but there are also compound assignment operators that combine an operation with assignment.

// let x = 10; // Assignment
// x += 5; // x = x + 5; x = 10 + 5 = 15 // Addition assignment: x

// console.log(x); // 15

// x -= 3; // x = x - 3; x = 15 - 3 = 12 // Subtraction assignment: x
// console.log(x); // 12

// x *= 2; // x = x * 2; x = 12 * 2 = 24 // Multiplication assignment: x
// console.log(x); // 24

// x /= 4; // x = x / 4; x = 24 / 4 = 6 // Division assignment: x
// console.log(x); // 6 

// x %= 2; // x = x % 2; // Modulus assignment: x
// console.log(x); // 0 

// x **= 3; // x = x ** 3; // Exponentiation assignment: x
// console.log(x); // 0 (since 0 raised to any power is still 0)


// ===================================================================================================================================================


// (7C) RELATIONAL  OPERATORS:
// Relational operators are used to compare two values and return a boolean result (true or false). The most common relational operators are equality (==), strict equality (===), inequality (!=), strict inequality (!==), greater than (>), less than (<), greater than or equal to (>=), and less than or equal to (<=).

// console.log(10 < 20); // Less than: true
// console.log(10 > 20); // Greater than: false
// console.log(10 <= 20); // Less than or equal to: true
// console.log(10 >= 20); // Greater than or equal to: false
// console.log(10 == 10); // Equality: true
// console.log(10 != 20); // Inequality: true 
// console.log(10 === 10); // Strict equality: true (checks value and type)
// console.log(10 !== 20); // Strict inequality: true (checks value and type)
// console.log(10 === "10"); // Strict equality: false (different types)
// console.log(10 == "10"); // Equality: true (type coercion occurs, converts string to number)
// console.log(10 !== "10"); // Strict inequality: true (different types)
// console.log(10 != "10"); // Inequality: false (type coercion occurs, converts string to number)
// console.log(10 === 10.0); // Strict equality: true (both are numbers with the same value)
// console.log(10 == 10.0); // Equality: true (type coercion does not occur, both are numbers with the same value)
// console.log(10 !== 10.0); // Strict inequality: false (both are numbers with the same value)
// console.log(10 != 10.0); // Inequality: false (both are numbers with the same value)


// ===================================================================================================================================================


// (7D) LOGICAL OPERATORS:
// Logical operators are used to combine or negate boolean values. The most common logical operators are AND (&&), OR (||), and NOT (!).

//  AND (&&) Operator

/*

Condition 1   Condition 2   Result
true          true          true
true          false         false
false         true          false
false         false         false

*/

// let Myage = 20;

// console.log(Myage >= 18 && Myage <= 21); // AND: true (age is greater than or equal to 18 and less than or equal to 21)
// console.log(Myage <= 18 && Myage >= 21); // AND: false (age is not less than or equal to 18 and also not greater than or equal to 21)
// console.log(Myage >= 18 && Myage >= 21); // AND: false (age is not greater than or equal to 18 and also not greater than or equal to 21)
// console.log(Myage <= 18 && Myage <= 21); // AND: false (age is not less than or equal to 18 and also less than or equal to 20)


// OR (||) Operator

/*

Condition 1   Condition 2   Result
true          true          true
true          false         true
false         true          true
false         false         false

*/

// let myName = "Sanz";
// let myNickName = "Kumar";

// console.log(myName === "Sanz" || myNickName === "Kumar"); // OR: true (name is "Sanz" or nickname is "Kumar"
// console.log(myName == "Sanz" || myNickName == "edas"); // OR: true (name is "Sanz" or nickname is not "edas")
// console.log(myName == "edas" || myNickName == "Kumar"); // OR: true (name is not "edas" but nickname is "Kumar")
// console.log(myName == "edas" || myNickName == "edas"); // OR: false (name is not "edas" and nickname is not "edas")


// NOT (!) Operator
// The NOT operator negates a boolean value, converting true to false and vice versa.

// let isRaining = false;
// console.log(!isRaining); // NOT: true (negates false to true)
// console.log(!(5 > 10)); // NOT: true (negates false to true, since 5 is not greater than 10)
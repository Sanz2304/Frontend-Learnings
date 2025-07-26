/*  1. CHARACTERISTICS OF JAVASCRIPT - Written Notes
    2. APPLICATIONS OF JAVASCRIPT - Written Notes
    3. CONNECTING JAVASCRIPT TO HTML - Written Notes
*/    

// 4. VARIABLES AND IDENTIFIERS

var useName = "Santhosh Kumar";

let $age = 30;
let _address = "varusanadu";
// let 0phoneNumber = "1234567890"; // This will cause an error because variable names cannot start with a number

let newEmployeeId = "EMP12345"; //camelCase
let new_employee_id = "EMP12345"; //snake_case or underscore_cas
let NewEmployeeId = "EMP12345"; //PascalCase
let newemployeeid = "EMP12345"; //lowercase
let newemployee1 = "EMP12345"; //lowercase with a number

// console.log(useName);
// console.log($age);
// console.log(_address);
// console.log(newEmployeeId);
// console.log(new_employee_id);


// ===================================================================================================================================================


// 5. DECLARATION AND INITIALIZATION (VAR, LET, CONST)

// VAR:

// var age = 25; //declaration and initialization

var age; //declaration
age = 25; //initialization

// console.log(age); //25

var age = 30; //Re-declaration
var age = 'Forty'; //Re-initialization

// console.log(age); //Forty


// LET:
let newAge;
// console.log(newAge); //undefined

newAge = 35; //initialization
// console.log(newAge); //35


// let newAge = 40; //Re-declaration will cause an error because 'let' does not allow re-declaration in the same scope
// console.log(newAge); //Uncaught SyntaxError: Identifier 'newAge' has already been declared

newAge = 40; //Re-initialization
// console.log(newAge); //40

// CONST:

// const emp;
// console.log(emp); //Uncaught SyntaxError: Missing initializer in const declaration

const emp = "EMP001"; //declaration and initialization
// console.log(emp); //EMP001

// const emp = "EMP002"; //Re-declaration will cause an error because 'const' does not allow re-declaration in the same scope
// console.log(emp); //Uncaught SyntaxError: Identifier 'emp' has already been declared

const pi = 3.14; //declaration and initialization
// console.log(pi); //3.14


// ============================================================================================================================================


// 6. DATA TYPES

// PRIMITIVE DATA TYPES

// let num = 10; // Number

// let str = "Hello, World!"; // String
// let str2 = `Hello, World!`; // Template Literal (String with backticks)
let char = 'A'; // Character (JavaScript does not have a separate character type, so it's treated as a string of length 1)

let isTrue = true; // Boolean

let noValue = null; // Null

let notDefined; // Undefined

// console.log(num, str, isTrue, noValue, notDefined); // 10 "Hello, World!" true null undefined

// NON-PRIMITIVE DATA TYPES

// ARRAY
// An array is a collection of elements, which can be of any data type, including other arrays or objects.

//length         1        2         3
let fruits = ["Apple", "Banana", "Cherry"]; // Array of strings
//index          0        1         2

// console.log(fruits); //(3) ['Apple', 'Banana', 'Cherry']
// console.log(fruits[0]); //Apple
// console.log(fruits[1]); //Banana

// console.log(fruits.length); //3
// console.log(fruits.length - 1); //2 (Last index of the array)
// console.log(fruits[fruits.length - 1]); //Cherry (Accessing the last element)


// OBJECT
// An object is a collection of key-value pairs, where keys are strings (or Symbols) and values can be of any data type.

let vehicle = {
    vehicleType: "Four Wheeler",
    Brand: "Toyota",
    model: "Camry",
    price: 300000,
    fuelType: "Petrol"
}

// console.log(vehicle); // {vehicleType: "Four Wheeler", Brand: "Toyota", model: "Camry", price: 300000, fuelType: "Petrol"}
// console.log(vehicle.vehicleType); //Four Wheeler
// console.log(vehicle["price"]); //300000 (Accessing property using bracket notation)


// ===================================================================================================================================================


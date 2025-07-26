// 8. CONCATENATION AND TEMPLATE STRINGS LITERALS

let str = "Hello";
let str1 = "World";

let output = str + " " + str1; // Concatenation using the + operator

console.log(output); // Hello World

// Template Strings Literals(Backticks ``)

let newString = `Santhosh is a good boy`; // Using backticks for template literals
console.log(newString); // Santhosh is a good boy

//String Interpolation

let Fname = "Santhosh";
let greeting = `Hello, ${Fname} How are you!`; // Using template literals for string interpolation
console.log(greeting); // Hello, Santhosh How are you!

let mulNum = 5;
let mulNum1 = 10;
let multiplication = `5 * 10 = ${mulNum * mulNum1}`; // Using template literals for expression evaluation
console.log(multiplication); // 5 * 10 = 50
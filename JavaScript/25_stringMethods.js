// 25. STRING METHODS: - String methods are used to manipulate the string. It is used to get the value of the string. It is used to set the value of the string.

/* 

A. charAt()
B. charCodeAt()
C. concat()
D. indexOf()
E. lastIndexOf()
F. slice()
G. substring()
H. substr()
I. split()
J. replace()
K. replaceAll()
L. trim()
M. trimStart()
N. trimEnd()
O. padStart()
P. padEnd()

*/


let str = "Hello World";
let str1 = "Santhosh";

// charAt() method: It is used to get the character at the specified index. It will return the character at the specified index.
str.charAt(0); // H
str.charAt(-1); // "" empty string. This is because it will return the character at the specified index.
str.charAt(str.length-1); // d


// charCodeAt() method: It is used to get the character code at the specified index. It will return the character code at the specified index.
str.charCodeAt(0); // 72 Return ASCII value of H
str.charCodeAt(-1); // NaN this is because it will return the character code at the specified index.

// concat() method: It is used to concatenate the string. It will return the concatenated string.
let newStr = str.concat(str1);
let newStr1 = str.concat(" " + str1)
// console.log(newStr); // SanthoshHello World
// console.log(newStr1); // Santhosh Hello World



// includes() method: It is used to check if the string contains the specified string. It will return true if the string contains the specified string.
str.includes("Hello"); // true
str.includes("e", 1); // true
str.includes("j", 1); // false
str.includes("o", 5); // true 


// IndexOf() method: It is used to get the index of the specified string. It will return the index of the specified string. It will return -1 if the string is not found. It will start searching from left to right.
str.indexOf("l"); // 2
str.indexOf("l", 3); // 3
str.indexOf("j"); // -1


// LastIndexOf() method: It is used to get the index of the specified string. It will return the index of the specified string. It will return -1 if the string is not found. It will start searching from right to left.
str.lastIndexOf("l"); // 9
str.lastIndexOf("o", 3); // 7
str.lastIndexOf("j"); // -1


// Repeat() method: It is used to repeat the string. It will return the repeated string.
str.repeat(3); // Hello WorldHello WorldHello World 


// Replace / ReplaceAll() method: It is used to replace the specified string. It will return the replaced string.

let str2 = "Js is a Script lang - Js"
str.replace("Js", "Javascript") // Js is replaced with Javascript. Javascript is a Script lang - Js. It will replace only the first occurrence of Js.
str.replaceAll("Js", "Javascript") // Js is replaced with Javascript. Javascript is a Script lang - Javascript. It will replace all the occurrences of Js.


// Slice() method: It is used to get the substring from the specified index. It will return the substring. It has 2 parameters start and end.

str.slice(0, 5); // Hello
str.slice(3,8); // lo Wor
str.slice(-3); // World
str.slice(-3, -1); // Wo


// Substring() method: It is used to get the substring from the specified index. Diffrence between slice and substring is that substring will not accept negative index. 
// If we are using negative index, it will return the substring from the end. It will return the substring. It has 2 parameters start and end.

str.substring(0, 5); // Hello
str.substring(3,8); // lo Wor
str.substring(-3); // Hello World
str.substring(-3, -1); // "" empty string. This is because it will return the substring from the end.



// Split() method: It is used to split the string into an array of strings. It will return the array of strings. It has 2 parameters start and end.
str1 = "I am Bat-Man";

str1.split(""); // ["I", " ", "a", "m", " ", "B", "a", "t", "-", "M", "a", "n"]
str1.split(" "); // ["I", "am", "Bat-Man"]
str1.split("-"); // ["I am Bat", "Man"]
let split = str1.split("-", 1); // ["I am Bat"]
console.log(split) // [ 'I am Bat' ]


// startsWith() method: It is used to check if the string starts with the specified string. It will return true if the string starts with the specified string.
str.startsWith("H"); // true
str.startsWith("Hello", 0); // true It will start searching from the index 0.
str.startsWith("H", 1); // false It will start searching from the index 1.
str.startsWith("W", 6); // true It will start searching from the index 6.


// endsWith() method: It is used to check if the string ends with the specified string. It will return true if the string ends with the specified string.
str.endsWith("d"); // true
str.endsWith("o", 10); // true It will start searching from the index 10.
str.endsWith("o", str.length); // true It will start searching from the index 11.
str.endsWith("World"); // true

// toLowerCase() method: It is used to convert the string to lowercase. It will return the lowercase string.
str.toLocaleLowerCase(); // hello world


// toUpperCase() method: It is used to convert the string to uppercase. It will return the uppercase string.
str.toUpperCase(); // HELLO WORLD


// trim() method: It is used to remove the whitespace from the string. It will return the string.
let str3 = "   Hello World   ";
str3.trim(); // Hello World

// trimStart() / trimLeft() method: It is used to remove the whitespace from the start of the string. It will return the string.
str3.trimStart(); // Hello World  
str3.trimLeft(); // Hello World  // deprecated


// trimEnd() / trimRight() method: It is used to remove the whitespace from the end of the string. It will return the string.
str3.trimEnd(); //   Hello World
str3.trimRight(); //   Hello World // deprecated


// padStart() method: It is used to pad the string with the specified string. It will return the padded string.
str3.padStart(10, "X"); // XXXXXHello World


// padEnd() method: It is used to pad the string with the specified string. It will return the padded string.
str3.padEnd(10, "X"); // Hello WorldXXXXX




// Error Handling - The error handling is used to handle the errors in the code.

// types of errors
/* 
1. Syntax Error - The syntax error is used to handle the syntax errors in the code.
2. Reference Error - The reference error is used to handle the reference errors in the code.
3. Type Error - The type error is used to handle the type errors in the code.
4. Range Error - The range error is used to handle the range errors in the code.
5. URI Error - The URI error is used to handle the URI errors in the code.
6. Eval Error - The eval error is used to handle the eval errors in the code.
7. Internal Error - The internal error is used to handle the internal errors in the code.
8. Aggregate Error - The aggregate error is used to handle the aggregate errors in the code.
9. Network Error - The network error is used to handle the network errors in the code.
10. Promise Error - The promise error is used to handle the promise errors in the code.
11. Promise Rejection Error - The promise rejection error is used to handle the promise rejection errors in the code.
12. Security Error - The security error is used to handle the security errors in the code.
*/

// 1. syntax error:

// Example: 
// console.log"Let's code!"; // This is a syntax error. Because brackets were missing.

// 2. reference error:

console.log(a); // This is a reference error. Because a is not defined.


// 3. type error:

console.log(10 + "10"); // This is a type error. Because 10 is a number and "10" is a string.


// 4. range error:

// console.log(10 / 0);  // infinity // This is a range error. Because division by zero is not allowed in JavaScript, it results in Infinity.


// 5. URI(Uniform Resource Identifier) error:

// decodeURIComponent() - This is a function that decodes a URI component.
// What is URI?
// URI Means Uniform Resource Identifier. This is a string of characters that identifies a resource.

// decodeURIComponent("%"); // This is a URI error. Because the percent sign is not a valid URI component.


// 6. eval(expression) error (EvalError):
// In modern JavaScript, EvalError is rarely thrown by the JavaScript engine itself, but you can create one manually.
// Example:
// try {
//     throw new EvalError("This is an eval error example.");
// } catch (e) {
//     console.log(e.name + ": " + e.message); // EvalError: This is an eval error example.
// }



// 7. internal error:
// InternalError is not standard in all JavaScript engines, but in some (like Firefox), you can trigger it by causing too much recursion.
// Example:
// function recurse() {
//     return recurse();
// }
// try {
//     recurse();
// } catch (e) {
//     console.log(e.name + ": " + e.message); // InternalError: too much recursion (in some JS engines)
// }

// 8. aggregate error:
// AggregateError is a new error type introduced in ES2020. It's used to group multiple errors together.
// Example:

// try {
//     throw new AggregateError([new Error("Error 1"), new Error("Error 2")], "Multiple errors occurred");
// } catch (e) {
//     console.log(e.name + ": " + e.message); // AggregateError: Multiple errors occurred
//     console.log(e.errors); // [Error: Error 1, Error: Error 2]
// }



// 9. network error:
// NetworkError is a type of error that occurs when there is a problem with the network connection.
// Example:
// fetch("https://api.example.com/data")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Network error:", error));


// 10. promise error:
// PromiseError is a type of error that occurs when there is a problem with the promise.
// Example:
// Promise.reject("This is a promise error example.");


// 11. promise rejection error:
// PromiseRejectionError is a type of error that occurs when there is a problem with the promise rejection.
// Example:
// Promise.reject("This is a promise rejection error example.");



// 12. security error:
// SecurityError is a type of error that occurs when there is a security problem.
// Example:
// fetch("https://api.example.com/data")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Security error:", error));



try{
    const json = '{"name": "John", "age": 30}';
    const obj = JSON.parse(json);
    console.log(obj.name);

    if(obj.place === undefined){
        // throw new Error("Place is not defined"); // This is a custom error.
        throw new ReferenceError("Place is not defined"); // This is a custom error.

    }
}catch(error){
    console.log(error.message); // This will show the message of the error.
    console.log(error.name); // This will show the name of the error.
    console.log(error.stack); // This will show the stack of the error.
    console.log(error.cause); // This will show the cause of the error.
    console.log(error.code); // This will show the code of the error.
    console.log(error.column); // This will show the column of the error.
    console.log(error.line); // This will show the line of the error.
    console.log(error.number); // This will show the number of the error.
    
}finally{
    console.log("This will always execute");
    
}
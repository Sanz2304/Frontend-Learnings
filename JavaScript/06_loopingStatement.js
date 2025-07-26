// 11. LOOPING STATEMENTS
// Explaination: Looping statements are used to execute a block of code repeatedly as long as a specified condition is true. Common looping statements include `for`, `while`, and `do...while`.
// for each and for in loops are also used to iterate over collections or objects. We will cover these in detail when we discuss data structures like arrays and objects.

// FOR LOOP

/* 

Syntax:

for (initialization; condition; increament/decrement){
    // code to be executed
}

*/

// for(let i = 1; i <= 10; i++){
//     console.log(1);
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     if(i%2 === 1){ // Check if the number is odd
//     console.log(i);
//     }
// }


// WHILE LOOP

/*

Syntax:

initialization;
while(condition){
statement;
increment/decrement;
}

*/

// let i = 0;
// while(i<5){
//     console.log(1);
//     i++;
// }


// DO WHILE LOOP

/*

Syntax:

initialization;

do {
    statement;
    increment/decrement;
}
while(condition);

*/

// let i = 1;

// do {
// console.log(i);
// i++

// }
// while(i <= 20);


// CONTINUE STATEMENT
// The `continue` statement is used to skip the current iteration of a loop and continue with the next iteration.

// let i = 1;

// do {
// if (i === 11) { // Check if the number is even
//     i++;
//     continue; // Skip the rest of the loop when i is 11
// }
// console.log(i);
// i++

// }
// while(i <= 20);


// BREAK STATEMENT
// The `break` statement is used to exit a loop prematurely when a certain condition is met.

// let i = 1;

// do {
// if (i === 11) { // Check if the number is even
//     break; // Exit the loop when i is 11
// }
// console.log(i);
// i++

// }
// while(i <= 20);


let i = 1;

do {
if (i % 2 === 0) { // Check if the number is even
    i++;
    continue; // Skip the rest of the loop when i is even
}
console.log(i);
i++

}
while(i <= 20);


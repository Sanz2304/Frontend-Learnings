// 31. Synchronous vs Asynchronous JavaScript

// Synchronous JavaScript: Code runs one line after another, waiting for each line to finish before moving to the next.
// Example: The following functions will run in order, and each will finish before the next starts.

let f1 = function() {
  console.log("first");
}
let f2 = function() {
  console.log("second");
}
let f3 = function() {
  console.log("third");
}

// Synchronous example:
f1(); // prints "first"
// f2(); // if you uncomment this, it would print "second" right after "first"

// Asynchronous JavaScript: Some code (like setTimeout, API calls, etc.) can run in the background and finish later.
// The rest of the code keeps running without waiting for it to finish.

setTimeout(f2, 3000); // This schedules f2 to run after 3 seconds, but doesn't stop the next line from running

f3(); // prints "third" immediately after "first"

// Output will be:
// first
// third
// (after 3 seconds)
// second

/* 
Simple explanation of the flow:

1. Call Stack:
- The call stack is a data structure that stores information about the active functions in the program.
- When JavaScript runs, it puts each function call on a "call stack" and runs them one by one.
- It is a LIFO (Last In First Out) data structure.
- f1 is put on the call stack and executed immediately, printing "first".
- f3 is put on the call stack and executed immediately, printing "third".
- setTimeout is put on the call stack and executed immediately, but it doesn't block the main code.
- After 3 seconds, f2 is put on the call stack and executed, printing "second".

2. Web API:
- Web APIs are a part of the browser's environment that handle tasks like network requests, timers, and DOM manipulation.
- It is a FIFO (First In First Out) data structure.
- setTimeout is handled by the browser's "Web APIs" in the background. It doesn't block the main code.
- f2 is put into the "Web API" after 3 seconds.

3. Callback Queue:
- The callback queue is a data structure that stores information about the functions that need to be executed after the current code finishes.
- It is a FIFO (First In First Out) data structure.
- After 3 seconds, f2 is put into the "callback queue".

4. Event Loop:
- The event loop is a loop that checks the call stack and callback queue for functions to run.
- The "event loop" checks if the call stack is empty, and if so, moves f2 from the callback queue to the call stack to run it.

So, "first" and "third" are printed right away, and "second" is printed after 3 seconds.
*/


/* 

event loop:
1. Micro task queue:
- Micro tasks are tasks that are executed immediately after the current task.
- This is first priority to execute.
- promises are the example of micro tasks. we will see this in the next example.


2. Macro task queue:
- Macro tasks are tasks that are executed after the current task.
- This is second priority to execute.
- setTimeout, setInterval, fetch, etc. are the example of macro tasks. we will see this in the next example.


*/
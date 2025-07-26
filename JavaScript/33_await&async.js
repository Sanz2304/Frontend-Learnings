// 33. ASYNC and AWAIT in JavaScript

/* 

AWAIT : It is used to wait for the promise to resolve or reject.
It will convert the asynchronous code into synchronous code.

ASYNC : It is used to make the function asynchronous. It will return a promise.

*/

let newPromise = new Promise ( (fullFilled, failed) => {

  let dataRecieved = true;

  if(dataRecieved){
    fullFilled("Data Recieved successfully");
  }
  else{
    failed("Failed to Recieve Data");
  }
})

// Asynchronous code
// Senario 1:
// newPromise.then( (message) => {
//   console.log(`Sucess : ${message}`);
  
// } )
// .catch( (error) => {
//   console.log(`Sucess : ${error}`);
// } )

// Senario 2: Using await making the asynchronous promise to synchronous:
// let message = await newPromise;
// console.log(message); // Data Recieved successfully
// console.log("After the promise");

// In the above senario 2, we are using await keyword to make the code synchronous which is handles success message.
// But for failure we did not handle the error. For that we need to use try catch block.


// Senario 3:
// synchronous code
// try {
//   let message = await newPromise;
//   console.log(message); // Data Recieved successfully
//   console.log("After the promise");
// } 
// catch (error) {
//   console.log(error); // Failed to Recieve Data
// }
// finally{
//   console.log("Finally block");
// }


// Senario 4:
// Making above senario 3 as asynchronous code

async function asyncFunction(){
  try {
    let message = await newPromise;
    let message2 = await newPromise; // This is the second promise that is resolved and the code after the promise is executed. We can use multiple await to handle multiple promises in same try catch block inside the async function.
    console.log(message); 
    console.log(`Next Message: ${message2}`);
  }
  catch (error) {
    console.log(error);
  }
  finally{
    console.log("Finally block");
  }
}

asyncFunction();
console.log("Last");

/* 

Senario 1:
output (then - promise Asynchronous) :

After the promise
Sucess : Data Recieved successfully



Senario 2:
output (await) :
Data Recieved successfully
After the promise

Here we can see that the code is executed line by line and the promise is resolved and the code after the promise is executed.
We made the newPromise code synchronous by using await.



Senario 3:
output (try catch - promise synchronous) :

Data Recieved successfully
After the promise
Finally block

Senario 4:
output (async await - promise Asynchronous) :

Last
Data Recieved successfully
Next Message: Data Recieved successfully
Finally block



*/




// 31. Promises in JavaScript

/* 

Explanation:

Promises are a way to handle asynchronous operations in JavaScript.
promises are the object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It has 3 states:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled: The operation completed successfully.
3. Rejected: The operation failed.

syntax:

const promise = new Promise((resolve, reject) => {
  // asynchronous operation
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

resolve: is used to resolve the promise.
reject: is used to reject the promise.


*/


let promiseData = new Promise( (resolve, reject) => {

  let dataRecieved = true;

  if(dataRecieved){
      resolve("Data Recieved"); // Then is used to handle the resolved state of the promise.
      
  } else {
      reject("Data Not Recieved"); // Catch is used to handle the rejected state of the promise.
  }

} )

// promiseData.then( console.log ).catch( console.log ) // Data Recieved 

// Instead of using console.log we can use arrow function to handle the resolved and rejected state of the promise.

promiseData.then( (message) => {  // messsage parameter is used to handle the resolved state of the promise.
  console.log(`Sucess : ${message}`);
  
} )
.catch( (error) => { // error parameter is used to handle the rejected state of the promise.
  console.log(`Sucess : ${error}`);
} )
.finally( () => {
  console.log("Finally block"); // Finally block is used to execute the code after the promise is resolved or rejected. It will always execute.
} )

// Output: Sucess : Data Recieved
// Finally block



// See uniq technoloigies YT Video: https://www.youtube.com/watch?v=NWHluLBZX9Q&t=11h for better understanding of promises.

// let newPromise = new Promise( (resolve, reject)=>{

//   let dataRecieved = false;

//   if(dataRecieved){
//       resolve( "Data Recieved" )
//   }
//   else{
//       reject( "Data Not Recieved" )
//   }

// } )
// newPromise.then( ( message )=>{
//     console.log( "Succes: " + message  );
//     return "Next Sucess" + message
// } )
// .then( ( nextMessage )=> {  console.log( nextMessage );
//  }  )
// .catch( (error)=>{
//     console.log( "Failure: " + error );
  
// } )
// .finally( ()=>{
//     console.log( "End" );
// } )




// CALL BACK HELL:

// Callback hell is a situation where we have to call a function inside a function inside a function inside a function...
// This is not a good practice and it is difficult to maintain.




// function fetchProfile( sucesscallBack, errorCallback ){
//     let dataRecieved = true;

//     if(dataRecieved){
//         sucesscallBack("Data Recieved")
//     }
//     else{
//         errorCallback("Data Not Recieved")
//     }
// }

// fetchProfile( 
//     (message)=>{
//         console.log( message );

//         fetchProfile( 
//             (nextMessage)=>{
//                 console.log( "Next Message:" + nextMessage );
              
//             },
//             (nextError)=>{
//                 console.log( "Next Error:" + nextError );
//             }
//          )
      
//     }, 
//     (error)=>{
//         console.log( error );
//     }  
// )
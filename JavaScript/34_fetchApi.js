// 34. FETCH API

/*

Fetch API is a modern way to make HTTP requests in JavaScript.
It uses Promises to handle the response.
It requires of HTTP, JSON, URL etc.
It has 3 parts:
1. Request
2. Response
3. Error - Santhosh


*/




// fetch("https://fakestoreapi.com/users")
//     .then((response) => {

//         // Scenario 1:
//         // console.log(response); // it will return the response object



//         // Scenario 2:
//         // console.log(response.json()); // it will return the json data. The output will be : Promise {<pending>}
//         /* 
//         The output will be : Promise {<pending>}
//         because the response.json() is a promise and we need to wait for the promise to resolve.
//         But we did not handle the promise. 
//         We can this promise by using chaining .then() method by returning the promise.
//         */


//         // console.log(response.ok); // it will return true if the response is correct or ok


//         // Scenario 3:
//         // return response.json(); // it will return the object data to object 


//         // Scenario 4:
//         if (!response.ok) {
//             throw new Error("Failed to fetch"); // it will throw the error if the response is not ok
//         }
//         return response.json(); // it will return the object data to object 
//     })

//     // Scenario 3:
//     .then((data) => {
//         console.log(data); // it will return the json data
//     })

//     // handling the error
//     .catch((error) => {
//         // console.log(error); // it will return the complete error
//         // console.log(error.message); // it will return the error message
//         // console.log(error.message); // if we don't add api url in fetch then it will return 'Failed to fetch' the error message EX: fetch()
//         console.log(error.message); // If we don't add proper endpoint in fetch then it will return '{ status: 'error', message: 'Not Found' }' the error message EX: fetch("https://fakestoreapi.com/userss")
//     })



// Make Fetch() synchronous using await and async:

async function fetchData() { // it will make the function asynchronous

  try {
      let apiResponse = await fetch("https://fakestoreapi.com/users") // it will wait for the response to be resolved

      if (!apiResponse.ok) {
          throw new Error("Faild to fectch API Data!");
      }
      let data = await apiResponse.json() // it will wait for the json data to be resolved
      console.log(data[0]); // it will return the first object of the array
  }
  catch (error) {
      console.log(error.message); // it will return the error message
  }

}

fetchData()



/* 

Rest API Methods:

1. GET: It is used to fetch the data from the server.
2. POST: It is used to send the data to the server.
3. PUT: It is used to update the data in the server.
4. DELETE: It is used to delete the data from the server.
5. PATCH: It is used to update the data from the server.
6. OPTIONS: It is used to get the options for the server.
7. HEAD: It is used to get the headers of the server.
8. CONNECT: It is used to connect to the server.
9. TRACE: It is used to trace the server.


// Most used methods are GET, POST, PUT, DELETE.

*/
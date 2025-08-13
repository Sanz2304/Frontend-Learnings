// const student = {
//     name: "John", // string
//     age: 20, // number
//     isStudent: true, // boolean
//     skills: ["HTML", "CSS", "JavaScript"], // array
//     address: { // object
//         street: "123 Main St",
//         city: "Anytown",
//         state: "CA",
//         zip: "12345"
//     },
//     weakness : null, // null 
//     hobbies : undefined, // undefined - In JSON, undefined is not a valid value.
//     getFullName : function() { // function - In JSON, functions are not valid values.
//         return this.name;
//     },
//     born : new Date(1990, 1, 15), // date - In JSON, dates are not valid values.
//     //symbol, set/map, bigint etc
// }

// console.log(student);

// const jsonData = JSON.stringify(student); // Converting JSON to string
// JSON.parse(jsonData) // Converting string to JSON

// console.log(jsonData);

// console.log(student.name)

// console.log(student['age'])



const studentdata  = fetch('json.json')

studentdata.then( (res) => {
    console.log(res);
    return res.json()
}).then( (res) => {
    console.log(res);
    
})



// Reading JSON Locally
const friendsData = fetch("/assets/data/friends.json");

friendsData
  .then((response) => response.json())
  .then((friendsData) => {
    const resultDivEl = document.querySelector("#result");

    friendsData.map((friends) => {
      return (resultDivEl.innerText += friends.name);
    });
  });



// Reading JSON from API
const quotesAPI = fetch("https://mimic-server-api.vercel.app/quotes/1");

quotesAPI
  .then((res) => res.json())
  .then((quote) => {
    const quoteEl = document.querySelector("#quote");
    const authorEl = document.querySelector("#author");

    quoteEl.textContent = quote.quote;
    authorEl.innerText = quote.author;
    console.log(quote);
  });
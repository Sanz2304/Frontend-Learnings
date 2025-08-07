// OPPS - Object Oriented Programming

// Object - It is a collection of properties and methods

// Properties - It is a variable that stores data

// Methods - It is a function that performs an action on the object


// Object Overview:

let person = {
 userName : 'Santhosh', // property
 userage : 25, // property
 bio : function () { // method
    return `${this.userName} is learning JS`;
 },
 userInterest() { // method
    return `${this.userName} love to see youtube`;
 }

}

// console.log(person);
// console.log(person.userName);
// console.log(person.userage);
// console.log(person.bio);
// console.log(person.bio());
// console.log(person.userInterest);
// console.log(person.userInterest());


// Creating Reusable Functions

function createPerson(userName, userage) {
   let obj = {};

   obj.userName = userName;
   obj.userage = userage;

   obj.bio = function () {
    return `${this.userName} is learning JS`;
   }

   obj.userInterest = function () {
    return `${this.userName} love to see youtube`;
   }

   return obj;
}

let person1 = createPerson('Santhosh', 25);
let person2 = createPerson('Sheetal', 24);

// console.log(person1);
// console.log(person2);
// console.log(person2.userInterest());



// ReCreate it using Javascript Constructor function

// Constructor function is a special function that creates and initializes an object instance of a class.
// Constructor functions are defined using a function declaration and are called using the new keyword.

function Person(userName, userage) { // Constructor function - Function name should be in PascalCase
   this.userName = userName; // this keyword is used to refer to the current object
   this.userage = userage;

   this.bio = function () {
    return `${this.userName} is learning JS`;
   }
   
}

let person0 = new Person('Santhosh', 25); // new keyword is used to create a new object
let person3 = new Person('Sheetal', 24);

console.log(person0);
console.log(person3);
console.log(person3.bio());

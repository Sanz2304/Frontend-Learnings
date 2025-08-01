// Problems in defining methods in the constructor function.
// 1. It is creating different instances of the greet method.
// 2. It is not a good way to add methods to the object.
// 3. Syntax and readability is not good.
// 4. Inheritance - complex to implement.
// 5. No built-in checks for new keyword.
// 6. Sharing methods are little difficult.

// Constructor function
// function Person(uName, uAge) {
//     this.uName = uName,
//     this.uAge = uAge

//     // this is not a good way to add methods to the object. It is creating different instances of the greet method.
//     // this.greet = function () {
//     //     return `Hello ${uName}`
//     // }


//     if (new.target) { // new.target is a special keyword that is used to check if the function is called with the new keyword.
//         this.uName = uName,
//         this.uAge = uAge
//     } else {
//         throw new Error("Function must be with new keyword")
//     }

//     Person.prototype.greet = function () {
//         return `Hello ${uName}`
//     }

// } 

// const somePerson = new Person('Santhosh', 25); // We need to use the new keyword to create a new object.
// const somePerson1 = Person('Sheetal', 24); // This will throw an error because the function is not called with the new keyword.

// console.log(somePerson.greet()); // Hello Santhosh
// console.log(somePerson1.greet()); // Hello Sheetal

// this will return false because the greet method is not the same for both the objects. It is creating different instances of the greet method.
// console.log( somePerson.greet === somePerson1.greet ); // false
// After adding the greet method to the prototype, it will be true. the greet method is the same for both the objects. It is creating a single instance of the greet method.





// To overcome the problem of in constructor function, we can use class.

// Classes - Class is a blueprint for creating objects. It is a template for creating objects.
// Class is a syntactic sugar for the constructor function.
// Class is a more modern and concise way to create objects.
// classes are introduced in ES6 - 2015.
// There are three types of classes:
// 1. Class declaration
// 2. Class expression
// 3. Anonymous class


/* 

Syntax:

class Person {
    constructor(uName, uAge) {
        this.uName = uName,
        this.uAge = uAge
    }
}

const somePerson = new Person('Santhosh', 25);


*/

// Class declaration
class Person {
    constructor(userName, userAge) { // constructor is a special method that is used to create and initialize an object.
        this.userName = userName,
        this.userAge = userAge
    }

    greet() {
        return `Hello ${this.userName}, your age is ${this.userAge}`
    }
}

// let callingPerson = new Person('Santhosh', 25)
// let callingPerson1 = Person('Santhosh', 25) // This will throw an error because the class is not called with the new keyword. Class will check if the new keyword is used and if not it will throw an error.
// // console.log(callingPerson);

// console.log(callingPerson.greet());
// console.log(callingPerson1);



// Class expression - Named class expression
const employeeDetails = class Employee{ // This is a class expression.
    constructor(empName){
        this.empName = empName
    }
}

let empName = new employeeDetails("Santhosh")
console.log(empName);
console.log(empName.empName); // Print employee name only


// Anonymous class - Unnamed class expression
const employeeDetails1 = class { // This is an anonymous class.
    constructor(empName){
        this.empName = empName
    }
}

let empName1 = new employeeDetails1("Santhosh")
console.log(empName1);








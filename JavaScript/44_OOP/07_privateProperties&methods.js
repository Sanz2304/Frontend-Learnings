// Private Properties and Methods - This is a new feature in JavaScript
// It is used to hide the properties and methods from the outside world
// # is used to declare a private property or method
// It is not accessible outside the class
// It is not accessible from the child class
// It is not accessible from the outside world

class Learner {
    #userPass // Private property
    constructor(userName, userAge, userPass){
        this.userName = userName
        this.userAge = userAge
        this.#userPass = userPass // Private property
        this._privateProperty = 'I am a private property' // Protected property - It is not accessible outside the class, We can access it only inside the class
    }

    // Getter method to access the private property
    get userPass(){
        return this.#userPass
    }

    bio(){
        return `Hi My name is ${this.userName}, my age is ${this.userAge}, ${this.#mySecret()}` // Private method
    }

    // Private method - It is not accessible outside the class, We can access it only inside the class
    #mySecret(){
        return `my pass is ${this.#userPass} and ${this._privateProperty}` // Protected property
    }
}

const learners = new Learner('Santhosh', 25, 1234);
// console.log(learners);
// console.log(learners.#userPass); // We can't access the private property from the outside world. This will throw an error - Property '#userPass' is not accessible outside class 'Learner' because it has a private identifier.
// console.log(learners.userPass); // We can access the private property from the outside world using the getter method
// console.log(learners.#mySecret()); // We can't access the private method from the outside world. This will throw an error - Uncaught SyntaxError: Private field '#mySecret' must be declared in an enclosing class
console.log(learners.bio()); // Hi My name is Santhosh, my age is 25, my pass is 1234 and I am a private property

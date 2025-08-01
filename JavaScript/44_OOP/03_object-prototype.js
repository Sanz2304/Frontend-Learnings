// Object Prototype : Object Prototype is a prototype of an object which is used to inherit the properties and methods of the parent object


Object.prototype.capitalize = function (string) { // prototype is used to add properties and methods to the object
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const myPlace = {
  city: 'chennai',

  greet() {
    console.log(`Vannakam ${this.city}!`)
  },

  capitalize(string) {
    return 'Migrated to Prototype'
  },
}

const nativePlace = {
  city: 'avadi',

  greet() {
    console.log('Vannakam ' + city)
  },
}

// console.log(myPlace.capitalize('avadi'))

// console.log(myPlace.capitalize('trichy'))

// console.log(myPlace.toString())

// console.log(nativePlace)





const num = [1,2,3,4,5,6,7,8,9,10];

// console.log(Array.prototype); // Array.prototype is the prototype of the array object

const arrObjs = Object.getOwnPropertyNames(Array.prototype); // getOwnPropertyNames is used to get all the properties of the array object

// console.log(arrObjs); // it will give all the properties of the array object

// for( let func of arrObjs ) {
//     console.log(func); // it will give all the properties of the array object
// }




function Person(name){
    return {name}
    // this.name = name
}

Person.prototype.greet = (name) => { // prototype is used to add properties and methods to the object
    return `Hi My name is ` + name
}

// console.log(Person.prototype);

// const person1 = new Person('Santhosh');

// console.log(person1);






// Constructor function
function Person(name, age) {
    this.name = name
    this.age = age
  }
  
  // Adding a method to the prototype
  Person.prototype.greet = function () {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  }
  
  // Adding another method to the prototype
  Person.prototype.haveBirthday = function () {
    this.age += 1
    console.log(`Happy Birthday! I am now ${this.age} years old.`)
  }
  
  // Creating instances of Person
  const person1 = new Person('Alice', 30)
  const person2 = new Person('Bob', 25)
  
  // Using the methods
  person1.greet() // Output: Hello, my name is Alice and I am 30 years old.
  person2.greet() // Output: Hello, my name is Bob and I am 25 years old.
  
  person1.haveBirthday() // Output: Happy Birthday! I am now 31 years old.
  person2.haveBirthday() // Output: Happy Birthday! I am now 26 years old.
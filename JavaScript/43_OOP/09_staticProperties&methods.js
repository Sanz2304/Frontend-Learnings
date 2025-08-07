/* 
Static properties and methods are properties and methods that are shared by all instances of the class.
Static properties and methods are defined on the class itself, not on the instances of the class.
Static properties and methods are not accessible from the instances of the class.
Static properties and methods are accessible from the class itself.


What is Instance?
Instance is an object that is created from a class.


what is the difference between static and instance properties?
Static properties are defined on the class itself, not on the instances of the class.
Instance properties are defined on the instances of the class.

*/



class Dog {
  constructor(name, year) {
    this.name = name
    this.bornYear = year
  }

static type = 'Animal' // Static property - It is shared by all instances of the class
legs = 4 // Instance property - It is not shared by all instances of the class

  age() {
    return new Date().getFullYear() - this.bornYear
  }

  static intro(name) { // Static method - It is shared by all instances of the class
    return `Hello I'm dog species! and my name is ${name}`
  }
}

const dog = new Dog('Daisy', 2019)

const dog2 = new Dog('Rocky', 2018)

console.log(dog) // {legs: 4, name: 'Daisy', bornYear: 2019}
// console.log(Dog) // [class Dog]
// console.log(Dog.type) // Animal // We can call static properties/methods using dot operator like classname.staticVariableName
// console.log(Dog.intro('Reenu')) // Hello I'm dog species! and my name is Reenu

// console.log(dog.type) // undefined
// console.log(dog.intro('Reenu')) // It will throw an error - TypeError: dog.intro is not a function because intro is a static method and it is not accessible from the instances of the class

console.log(dog.legs) // 4
console.log(dog.age()) // 6


// Static methods are useful when you want to perform operations that are not specific to any instance of the class.
// For example, you can use a static method to calculate the average of a set of numbers.
class MathUtils {
  static add(a, b) {
    return a + b
  }

  static subtract(a, b) {
    return a - b
  }
}

console.log(MathUtils.add(5, 3)) // Output: 8
console.log(MathUtils.subtract(5, 3)) // Output: 2



// Inbuild static methods  - These are the methods that are built into the language and are available on the class itself.

Math.PI // => static property or static field

Math.random() // => static method

// Array
Array.isArray() // check if it is array

// Number
Number.isNaN() // check Number is not a number(NaN)

// Object
Object.keys({}) // Returns an array of the object's own enumerable property keys.

// String
String.fromCharCode(65, 78, 66, 85) // converts Unicode values to characters (ANBU).




// Static properties and methods are useful when you want to keep track of the total number of instances of a class.
// For example, you can use a static property to keep track of the total number of instances of a class.
class ShoppingItem {
  constructor(product, cost) {
    this.product = product

    this.cost = cost

    this.constructor.totalCount++ // this.constructor is the class itself and totalCount is a static property
  }

  static totalCount = 0

  display() {
    return `Product name is: ${this.product} and its cost is ₹${this.cost}`
  }

  static getTotalCount() { // this.totalCount is a static property
    return this.totalCount++
  }
}

const remoteCar = new ShoppingItem('Remote Car', 4999)

const playStation = new ShoppingItem('PlayStation 6', 45000)

const playStation2 = new ShoppingItem('PlayStation 6', 45000) // 3rd

console.log(remoteCar)

console.log(playStation)

console.log('TotalCount', ShoppingItem.getTotalCount())
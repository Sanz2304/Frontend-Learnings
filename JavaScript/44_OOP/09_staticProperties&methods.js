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
// console.log(Dog.type) // Animal
// console.log(Dog.intro('Reenu')) // Hello I'm dog species! and my name is Reenu

// console.log(dog.type) // undefined
// console.log(dog.intro('Reenu')) // It will throw an error - TypeError: dog.intro is not a function because intro is a static method and it is not accessible from the instances of the class

console.log(dog.legs) // 4
console.log(dog.age()) // 6
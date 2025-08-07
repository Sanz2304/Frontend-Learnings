// Getter and Setter - Getter and Setter are used to get and set the value of a property.
// Class field - Class field is a property of the class. We can't use var, let, const to declare a class field.

class Learner {
    constructor(name, age, profession) {
      this._name = name // This is a private property, name as _name. It is a property of the object. We can't access it outside the class.
      this._age = age // This is a private property, age as _age. It is a property of the object. We can't access it outside the class.
      this.profession = profession
    }
  
    org = 'Santhosh' // This is a class field. It is a property of the class. We can't use var, let, const to declare a class field.
  
    get name() {
      return this._name.toUpperCase() // This is a getter. It is used to get the value of a property.
    }
  
    set name(value) {
      this._name = value // This is a setter. It is used to set the value of a property.
    }
  
    get age() {
      return this._age // This is a getter. It is used to get the value of a property.
    }
  
    set age(value) {
      if (typeof value === 'number') {
        this._age = value // This is a setter. It is used to set the value of a property.
      } else {
        console.error('invalid age') // This is a setter. It is used to set the value of a property.
      }
    }
  
    bio() {
      return `Hello my name is ${this.name} and i'm ${this.age} years old. And my profession is: ${this.profession}, org is ${this.org}`
    }
  }
  
  const learner1 = new Learner('rajinikanth', 27, 'Software Engineer')
  
  learner1.age = 20
  console.log(learner1)
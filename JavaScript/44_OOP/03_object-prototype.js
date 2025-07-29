// Object Prototype : Object Prototype is a prototype of an object which is used to inherit the properties and methods of the parent object

const num = [1,2,3,4,5,6,7,8,9,10];

// console.log(Array.prototype); // Array.prototype is the prototype of the array object

const arrObjs = Object.getOwnPropertyNames(Array.prototype); 

// console.log(arrObjs); // it will give all the properties of the array object

// for( let func of arrObjs ) {
//     console.log(func); // it will give all the properties of the array object
// }




function Person(name){
    this.name = name
}

Person.prototype.greet = (name) => { // prototype is used to add properties and methods to the object
    return `Hi My name is ` + name
}

// console.log(Person.prototype);

const person1 = new Person('Santhosh');

console.log(person1);







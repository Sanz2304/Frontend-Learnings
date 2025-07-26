// 28. OBJECT METHOD: Object methods are used to manipulate the object.

/* 

A. object.create()
B. object.assign()
C. object.freeze()
D. object.fromEntries()
E. object.keys()
F. object.values()
G. object.entries()

*/


//  PROTOTYPE OBJECT : The Protype object is the object that is used to create the object. In console log we can see the prototype object of the object.
// It is mainly used to create the object. We can see the prototype object in the end of created object in the broswer console log.


// object.create() : It is used to create a new object with the prototype object.

let person = {
  userName : "Santhosh",
  userAge : 25
}

// Normally Accessing the objects and keys:
// console.log(person);  // { userName: 'Santhosh', userAge: 25 }
// console.log(person.userName);  // { Santhosh }


let createObject = Object.create( person ); // Now this person is converted to the prototype object of the object created by Object.create(). Now we can access the properties of the prototype object in the child object.
// console.log(createObject); // {} this is the prototype object of the object We can see the prototype object of the object in the browser console log. In code editor we can't see the prototype object of the object.
// console.log(createObject.__proto__); // { userName: 'Santhosh', userAge: 25 } To access the prototye object in code editor, we can use __proto__ this is the prototype object of the object
// console.log(createObject.getPrototypeOf(createObject)); // { userName: 'Santhosh', userAge: 25 } To access the prototye object in code editor, we can use __proto__ this is the prototype object of the object
// console.log(createObject.userName); // Santhosh This is called Inheritance. We can access the properties of the prototype object in the child object.

createObject.userLocation = "Theni"

// console.log(createObject); // { userLocation: 'Theni' }


// In Browser Console log: Check index.html for Js link

/* 


{}
userLocation : "Theni"
[[Prototype]]: Object // This is the prototype object of the object created by Object.create()
userAge : 25
userName : "Santhosh"

*/


// Object.assign() : It is used to copy the properties of the prototype object to the child object.

let person1 = {
    id : "123",
    uName : "Sanz"
}

let createObject1 = Object.assign(person1, { Role : "FE" })
// console.log(person1);
// console.log(createObject1); // { id: '123', uName: 'Sanz', Role: 'FE' }


// Object.entries() : It is used to return the entries of the object. It will return the array of arrays.

let employeeDetails = {
  eName : "Santhosh",
  eAge : 25,
  eLocation : "Theni",
  eRole : "FE"
}

let employeeDetails1 = Object.entries(employeeDetails);
// console.log(employeeDetails1); // [ [ 'eName', 'Santhosh' ], [ 'eAge', 25 ], [ 'eLocation', 'Theni' ], [ 'eRole', 'FE' ] ] // This is converted the object properties to the array of arrays.

// Senario 1:
// employeeDetails1.push("eSalary"); // This will add the new property to the array of arrays. This will throw an error(TypeError: Iterator value eSalary is not an entry object)
// employeeDetails1.push(["eSalary"]); // This will add the new property to the array of arrays. This will not throw an error.
// Senario 2:
employeeDetails1.push(["eSalary", 100000]); // This will add the new property to the array of arrays. This will not throw an error.
// console.log(employeeDetails1); 
/* [
  [ 'eName', 'Santhosh' ],
  [ 'eAge', 25 ],
  [ 'eLocation', 'Theni' ],
  [ 'eRole', 'FE' ],
  'eSalary'
] */


// Object.fromEntries() : It is used to convert the array of arrays to the object.

let normalObjects = Object.fromEntries(employeeDetails1);
// console.log(normalObjects); // { eName: 'Santhosh', eAge: 25, eLocation: 'Theni', eRole: 'FE' } // This is converted the array of arrays to the object.

// For Senario 1:
// console.log(normalObjects); // This will throw an error(TypeError: Iterator value eSalary is not an entry object) because we have added the new property as a string.
// When pushing a new property to a object, we have pass the array of string Eg: employeeDetails1.push(["eSalary"]);
/* 

{
  eName: 'Santhosh',
  eAge: 25,
  eLocation: 'Theni',
  eRole: 'FE',
  eSalary: undefined // Here the value is undefined because we have added key but not value.
}

*/

// For Senario 2:
// console.log(normalObjects); // { eName: 'Santhosh', eAge: 25, eLocation: 'Theni', eRole: 'FE', eSalary: 100000 } // This is converted the array of arrays to the object.



// Object.keys() : It is used to return the keys of the object. It will return the array of strings.

let employeeDetails2 = Object.keys(employeeDetails);
// console.log(employeeDetails2); // [ 'eName', 'eAge', 'eLocation', 'eRole' ] // This is converted the object properties to the array of strings.



// Object.values() : It is used to return the values of the object. It will return the array of strings.

let employeeDetails3 = Object.values(employeeDetails);
// console.log(employeeDetails3); // [ 'Santhosh', 25, 'Theni', 'FE' ] // This is converted the object properties to the array of strings.


// Object.freeze() : It is used to freeze the object. We can't add, delete, modify the properties of the object. It will return the object.

let newObj = {
  id : 123
}

Object.freeze(newObj);
newObj.id = 456;
console.log(newObj); // { id: 123 } // Even though we have modified the value of the object, it will not change the value of the object.


// Object.isFrozen() : It is used to check if the object is frozen. It will return the boolean value.

Object.isFrozen(newObj); // true
Object.isFrozen(person); // false
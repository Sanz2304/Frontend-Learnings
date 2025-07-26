// 30. DEEP and SHALLOW COPY

// Understanding the Call by value:

// Stack Memory: to store primitive data types i.e int, float, double, char, boolean, string, etc.
// Heap Memory: to store non-primitive data types i.e objects, arrays, etc.



let a = 10;
let b = a;

/* 

stack (before modification):

Address    Variable    Value
1000       a           10
1001       b           10

*/ 

a = 20;

/* 

stack (After modification):

Address    Variable    Value
1000       a           20
1001       b           10 (original value of a is 10 will be there after modification)


*/ 

// if we change the value of a, it will not change the value of b. Because of call by value. Because a and b are stored in different memory locations and its a primitive data type.
// What was there before modification will be there after modification, in this case a and b are stored in different memory locations and its a primitive data type.
// It will take what is there in after modification.
// console.log(a, b); // 20 10 (because of call by value)




// Understanding the Call by Refrence:

/*  

    Stack Memory

    | address | Variable | value -> Reference/Pointer (Address)
    |--------------------|-------------------------------------|
    | 0x100   | obj1     | 0x001                               |
    | 0x104   | arr1     | 0x002                               |
    | 0x108   | obj2     | obj1 = 0x001                        |
    | 0x112   | arr2     | arr1 = 0x002                        |

    Heap Memory

    | Address | Object                |
    |---------|-----------------------|
    | 0x001   | { name: 'Kesavan' }   |
    | 0x002   | [ 1,2,3 ]             |

*/

// let obj1 = {
//   name : "Kesavan"
// }



// let obj2 = obj1 // obj2 is pointing to the same memory location as obj1.

// console.log(  obj1, obj2 ); // { name: 'Kesavan' } { name: 'Kesavan' }

// obj1.name = "Murugesan" // modifying the value of obj1 will also modify the value of obj2.

// console.log(  obj1, obj2 ); // { name: 'Murugesan' } { name: 'Murugesan' }

// obj2.role = "Developer" // adding a key value property, modifying the value of obj2 will also modify the value of obj1.

// console.log(  obj1, obj2 ); // { name: 'Murugesan', role: 'Developer' } { name: 'Murugesan', role: 'Developer' }




let arr1 = [ 1,2,3 ]

// let arr2 = arr1 // arr2 is pointing to the same memory location as arr1.

// console.log( arr1, arr2 ); // [ 1, 2, 3 ] [ 1, 2, 3 ]

// arr1[0] = "One" // modifying the value of arr1 will also modify the value of arr2.

// console.log( arr1, arr2 ); // [ 'One', 2, 3 ] [ 'One', 2, 3 ]






// DEEP COPY: Deep copy is a technique of copying the object from one memory location to another memory location.
// In deep copy, the original object and the copied object are stored in different memory locations.


// Deep copy in primitive data types:

// let a = 10;
// let b = a;

// a = 20;

// console.log( a,b ); // 20 10 // This is a deep copy. Because a and b are stored in different memory locations. So, if we change the value of a, it will not change the value of b.


// Deep copy in non-primitive data types:

let obj1 = {
  name : "Santhosh",
  role : "FE Developer"
}

// let obj2 = obj1;

// console.log(obj1, obj2); // { name: 'Santhosh', role: 'FE Developer' } { name: 'Santhosh', role: 'FE Developer' }
// If we change the value of obj1, it will also change the value of obj2. Because obj2 is pointing to the same memory location as obj1.

// let obj2 = { ...obj1 }; // This is a deep copy. Because obj2 is pointing to the different memory location as obj1.

// Modifying the value of obj2 will not change the value of obj1. Because obj2 is pointing to the different memory location as obj1.
// obj2.name = "Sheetal"
// obj2.role = "BE Developer"

// console.log(obj1, obj2); // { name: 'Santhosh', role: 'FE Developer' } { name: 'Sheetal', role: 'BE Developer' } // Deep copy







// SHALLOW COPY: Shallow copy is a technique of copying the object from one memory location to another memory location.
// In shallow copy, the original object and the copied object are stored in the same memory location.
// In shallow copy, if we modify the value of the copied object, it will also modify the value of the original object.
// In shallow copy, if we add a new key value property to the copied object, it will also add a new key value property to the original object.
// In shallow copy, if we delete a key value property from the copied object, it will also delete a key value property from the original object.
// In shallow copy, if we modify the value of the original object, it will also modify the value of the copied object.


let person = {
  userName : "Santhosh",
  hobbies : {
    Reading : "Books", 
    Coding :  "Js", 
    Gaming : "GTA"
  }
}

// Deep copy using spread operator:

// Scenario 1:

// let person2 = { ...person }; // This is a deep copy. Because person2 is pointing to the different memory location as person. But it will not copy the nested object.
// console.log(person, person2); // { userName: 'Santhosh', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } } { userName: 'Santhosh', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } } // Shallow copy because person and person2 are pointing to the same memory location.

// Scenario 2:

let person2 = { ...person, hobbies : { ...person.hobbies } }; // This is a deep copy. Because person2 is pointing to the different memory location as person. And it will copy the nested object.


// modifying the primitive data type value of person will also modify the value of person2.
person.userName = "Sheetal"

// console.log(person, person2); // { userName: 'Sheetal', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } } { userName: 'Santhosh', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } }


person2.hobbies.Reading = "Novels"

// console.log(person, person2); // { userName: 'Sheetal', hobbies: { Reading: 'Novels', Coding: 'Js', Gaming: 'GTA' } } { userName: 'Sheetal', hobbies: { Reading: 'Novels', Coding: 'Js', Gaming: 'GTA' } }
// Modifying the non-primitive data type value of person will also modify the value of person2.

// Senario 2 :

// console.log(person, person2); // { userName: 'Sheetal', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } } { userName: 'Santhosh', hobbies: { Reading: 'Novels', Coding: 'Js', Gaming: 'GTA' } }






// Deep copy using JSON.parse(JSON.stringify(obj)):
// JSON.stringify(obj) is used to convert the object into a string.
// JSON.parse(str) is used to convert the string into an object.

// let person3 = JSON.stringify( person);

// console.log(person3); // {"userName":"Sheetal","hobbies":{"Reading":"Books","Coding":"Js","Gaming":"GTA"}} // JSON string


let person3 = JSON.parse(JSON.stringify(person)); 
// console.log(person3); // { userName: 'Sheetal', hobbies: { Reading: 'Books', Coding: 'Js', Gaming: 'GTA' } }






//  ARRAY - Shallow copy

let arr = [1,2,3,[4,5,6]];

let array1 = [...arr];

// console.log(arr, array1); // [ 1, 2, 3, [ 4, 5, 6 ] ] [ 1, 2, 3, [ 4, 5, 6 ] ]

arr[0] = "One"

// console.log(arr, array1); // [ 'One', 2, 3, [ 4, 5, 6 ] ] [ 1, 2, 3, [ 4, 5, 6 ] ]

arr[3][0] = "Four"

// console.log(arr, array1); // [ 'One', 2, 3, [ 'Four', 5, 6 ] ] [ 1, 2, 3, [ 4, 5, 6 ] ]

//Deep Copy
let newArr = JSON.parse (JSON.stringify( arr  ))

console.log(newArr);  // [ 1, 2, 3, [ 4, 5, 6 ] ]
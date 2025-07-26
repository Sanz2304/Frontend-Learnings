// 21. FOR IN & FOR OF LOOP ITERATION FOR ARRAYS and STRINGS

// Normal For loop Iteration:

let arr = [10,20,30,40];

length = arr.length;

// console.log(length);

// for (let i = 0; i < length; i++){
//     console.log(arr[i]);
// }

let str = "SANTHOSH";

strLength = str.length;

// console.log(str.length);

// for (let i = 0; i < strLength; i++){
//     console.log(str[i]);
// }



// For Of Loop:

/* 

Syntax:

for(let value of iterable) { 
  // code block to be executed
}

*/

// for (let val of arr){
//     console.log(val); // 10 20 30 40
    
// }

// for (let char of str){
//     console.log(char); // S A N T H O S H
    
// }


//For Of - Looping in Function:

// function* genFunction(){
//     yield 1
//     yield 2
//     yield 3
// }

// let iterator = genFunction()

// for (let val of iterator){
//     console.log(val);
// }




// FOR Of - Looping in Objects:

// let obj = {
//     userName : 'Santhosh'
// }

// for ( let i of obj) {
//     console.log(i); // This will throw an error(TypeError: obj is not iterable). Because objects are not iterable in for of loop.
// }




// FOR In - Looping in Objects:
// Explaination: The for in loop is used to iterate over the properties of an object.

/* 

Syntax:

for(let key in object) {
  // code block to be executed
}

*/


let person1 = {
    userName : "Santhosh",
    hobbies : "Watching Movies",
    familyDetails : { // Nested object
        familyMembers : 5,
        siblings : ['Sasi', 'Sankar']
    },
    SomeFuncName() {
        console.log("This is from object!");
    }
}

for (let key in person1) {
    // console.log(key); // this will print only Keys
    /*
    
    userName
    hobbies
    familyDetails
    SomeFuncName

    */

    // console.log(person1[key]);
    /*
    
    userName
    Santhosh
    hobbies
    Watching Movies
    familyDetails
    { familyMembers: 5, siblings: [ 'Sasi', 'Sankar' ] }
    SomeFuncName
    [Function: SomeFuncName]

    */
    
}


// FOR IN - Array and String:

for (let i in arr){
    // console.log(i); // 0 1 2 3 - This will print only Indexes
    // console.log(arr[i]); // 10 20 30 40
}

for ( let a in str){
    console.log(str[a]); // S A N T H O S H
}







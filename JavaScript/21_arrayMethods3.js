// 24. ARRAY METHODS - HIGH ORDER METHOD:

// P. ForEach Method 
// Q. Map Method 

// In this JS file we covered upto TO Map Method. Find remaining methods in next array method js files

// R. Some Method
// S. Filter Method 
// T. Find Method
// U. FindIndex Method
// V. Reduce Method
// W. ForIn Method
// X. ForOf Method
// Y. Every Method


// FOR EACH METHOD: It will execute the function for each element of the array.

/* 

Syntax:

let someArray = [1,2,3,4,5,6];
let someArrayValue = someArray.forEach(callbackFunction);

callbackFunction(currentValue, index, array){
  // code block to be executed
}

*/

let arr = ['car', 'bike', 'cycle', 'lorry'];
arr.forEach(vehicles);

function vehicles(currentValue, indexesOfArray, fullArray){
    // console.log(currentValue);

    /* 
    car
    bike
    cycle
    lorry
    */

    // console.log(currentValue, indexesOfArray, fullArray);
    
    /* 
    car 0 [ 'car', 'bike', 'cycle', 'lorry' ]
    bike 1 [ 'car', 'bike', 'cycle', 'lorry' ]
    cycle 2 [ 'car', 'bike', 'cycle', 'lorry' ]
    lorry 3 [ 'car', 'bike', 'cycle', 'lorry' ]
    */
}


// ForEach & Map Method are mostly similiar, but it will differ in some senarios, will see this further.

// MAP METHOD: It will return a new array by executing the function for each element of the array.

/* 

Syntax:

let someArray = [1,2,3,4,5,6];
let someArrayValue = someArray.map(callbackFunction);

callbackFunction(currentValue, index, array){
  // code block to be executed
}

*/

let socialMedia = ['facebook', 'x-twitter', 'Instagram', 'youtube'];
socialMedia.map(function(current, index, array){
    // console.log(current, index, array);
    /* 

    facebook 0 [ 'facebook', 'x-twitter', 'Instagram', 'youtube' ]
    x-twitter 1 [ 'facebook', 'x-twitter', 'Instagram', 'youtube' ]
    Instagram 2 [ 'facebook', 'x-twitter', 'Instagram', 'youtube' ]
    youtube 3 [ 'facebook', 'x-twitter', 'Instagram', 'youtube' ]

    */
})

// Main difference between forEach and map method is that forEach method will not return a new array. It will return undefined.

// let carCompany = ['Benz', 'BMW', 'Porche'];

let listOfCarDetais = carCompany.forEach((cars) => {
    return cars
})
// console.log(listOfCarDetais); // undefined - Because forEach method will not return a new array. It will return undefined.

let listOfCarDetais1 = carCompany.map((cars) => {
    return cars
})
// console.log(listOfCarDetais1); // [ 'Benz', 'BMW', 'Porche' ]

let listOfCarDetais2 = carCompany.map((cars, index) => {
    return {["Car Id"] : index+100,["Car Company Name"] : cars}
})
// console.log(listOfCarDetais2);

/* 

[
  { 'Car Id': 100, 'Car Company Name': 'Benz' },
  { 'Car Id': 101, 'Car Company Name': 'BMW' },
  { 'Car Id': 102, 'Car Company Name': 'Porche' }
]

*/



// CHAINING METHODS:
// Explaination: Chaining methods are used to chain multiple methods together.


let cars = carCompany.map(ele => ele.toUpperCase()).sort().fill('Mustang', 1, 2) // chain of methods
// console.log(cars);


// let cars1 = carCompany.forEach(ele => ele.toUpperCase()).sort().fill('Mustang', 1, 2) // chain of methods will not work because forEach method will not return a new array. It will return undefined.
// console.log(cars); // TypeError: Cannot read properties of undefined (reading 'sort')


// Condition based statements: If we use map method, it will return a new array. If we use forEach method, it will not return a new array. It will return undefined.

let newArr2 = carCompany.map(  (cEle) =>{ return cEle=="Porche" }  )
console.log( newArr2 ); // [ false, false, true ]


let newArr3 = carCompany.forEach(  (cEle) =>{ return cEle=="Porche" }  ) // chain of methods will not work because forEach method will not return a new array. It will return undefined.
console.log( newArr3 ); // undefined

carCompany.forEach( val => console.log( val=="Benz" ) ) // it will return true or false based on the condition.
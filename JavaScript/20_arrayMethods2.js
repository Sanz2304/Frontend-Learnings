// 24. ARRAY METHODS:

// J. Join Method
// K. Reverse Method
// J. Sort Method
// L. IndexOf Method 
// M. LastIndexOf Method 
// N. Includes Method
// O. TO STRING METHOD

// In this JS file we covered upto TO STRING METHOD. Find remaining methods in next array method js files

// P. Reduce Method
// Q. Every Method
// R. Some Method
// S. Filter Method 
// T. Find Method
// U. FindIndex Method
// V. ForEach Method
// W. ForIn Method
// X. ForOf Method
// Y. Map Method


// SORT METHOD: It  will sort array in ascending order by default. It will sort the array in ASCCI Order. It will not return a new array. It will change the original array. It will not take any parameter.

let arr = [5,1,4,6,2,8,10,20,15,45,101,111,26,345, "&", " "]
arr.sort() //Sort in ASCCI Order
// console.log( arr ); // [ ' ', '&', 1,  10, 101, 111, 15,  2,   20, 26, 345, 4, 45,  5,   6,  8 ]


let arr1 = [10,20,30,40,50]
// REVERSE METHOD: It will reverse the array. It will not return a new array. It will change the original array. It will not take any parameter.
arr1.reverse() 
// console.log( arr1 ); // [ 50, 40, 30, 20, 10 ]


// INCLUDES METHOD: It will check if the array contains the value. It will return a boolean value. It will not take any parameter.
// console.log( arr1.includes( 11) ); // false


// JOIN METHOD: It will join the array elements with the separator. It will return a string. It will not take any parameter.

let arr2 = [1,2,3,4,5]
let joinedVal = arr2.join() // 1,2,3,4,5 converted to string
let joinedVal1 = arr2.join("0") // 1020304050 converted to string

// console.log( joinedVal ); // 1,2,3,4,5
// console.log( joinedVal1 ); // 1020304050

// TO STRING METHOD: It will convert the array to a string. It will return a string. It will not take any parameter.

let stringVal = arr2.toString("12") // to string method will not take any parameter will throw an error

// console.log( stringVal ); // 1,2,3,4,5



// IndexOf Method - It will return the index of the value. It starts from left to right, that is 0 index. It will take 2 parameters.

let someArray = [1,2,3,4,5,6];
let indexofArray = someArray.indexOf(1); // We should give some parameter here, If not it will return -1
// console.log(indexofArray); // 0

let someArray1 = [1,2,3,1,4,5,6,2]; // added duplicate element
// let indexofArray1 = someArray.indexOf(1); // it always start fincing index from 0.
// console.log(indexofArray1); // 0 Because it start from 0. eventhough we added duplicate element.
// console.log(someArray1.indexOf(1,2)); // 3 Because it start from 2. 2 means it will start from 2nd index.
// console.log(someArray1.indexOf(1, -2)); // it will return -1 because it will start from -2 index. -2 means it will start finding index from last.
// console.log(someArray1.indexOf(2, -4)); //7 Because it will start from -4 index. -4 means it will start finding index from last.



// LASTINDEXOF METHOD: It will return the last index of the value. It starts from right to left, that is -1 index. It will take 2 parameters.

let someArray2 = [1,2,3,4,5,6,2];
let lastIndexOfArray = someArray2.lastIndexOf(2); // It will return the last index of the value.
console.log(lastIndexOfArray); // 7
console.log(someArray2.lastIndexOf(2, -4)); // 1 Because it will start from -4 index. -4 means it will start finding index from last.
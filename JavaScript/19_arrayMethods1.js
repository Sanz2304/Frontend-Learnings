// 24. ARRAY METHODS:
// A. Pop Method
// B. Push Method
// C. Shift Method
// D. Unshift Method
// E. Splice Method
// F. Slice Method
// G. Concat Method
// H. Flat Method
// I. Fill Method

// In this JS file we covered upto Fill method. Find remaining methods in next array method js files

// J. Join Method
// K. Reverse Method
// J. Sort Method
// L. Find Method
// M. FindIndex Method
// N. Filter Method
// O. Map Method
// P. Reduce Method
// Q. Every Method
// R. Some Method
// S. Includes Method
// T. IndexOf Method
// U. LastIndexOf Method
// V. ForEach Method
// W. ForIn Method
// X. ForOf Method

// let arr = [100,200,300,400]

// Pop Method - It will remove the last element of the array and return the removed element.

// let poppedVal = arr.pop()
// console.log(poppedVal, arr ); //400 [ 100, 200, 300 ]

// Push Method - It will add the elements to the end of the array and return the new length of the array.

// arr.push( 500,550,600 )
// console.log( arr ); // [ 100, 200, 300, 500, 550, 600 ]

// Shift Method - It will remove the first element of the array and return the removed element.

// let firstVal = arr.shift()
// console.log(firstVal); // 100


// let arr = [1,2,3,4]
// let arr1 = [4,5,6,7]

// //Concat method - It will return a new array by concatenating the elements of the two arrays.

// let newArr = arr.concat(arr1) // [ 1, 2, 3, 4, 4, 5, 6, 7 ]
// let newArr1 = arr.concat(10,20,30) // [ 1, 2, 3, 4, 10, 20, 30 ]
// let newArr2 = [].concat(arr) // [ 1, 2, 3, 4 ]

// arr[0] = 111;

// console.log( newArr, newArr1, newArr2, arr ); // [ 1, 2, 3, 4, 4, 5, 6, 7 ] [ 1, 2, 3, 4, 10, 20, 30 ] [ 111, 2, 3, 4 ]




//Slice Method - It will return a new array by slicing the elements of the array. We can also pass the start and end index to the slice method. It is also used to copy the array.

/* 

Syntax:

let newArr = [10,2,3,4,5,6,7]

let slicedVal = newArr.slice( start, end )


*/

// let newArr = [10,2,3,4,5,6,7]


// let slicedVal = newArr.slice()

// newArr[0] = 101

// let slicedVal1 = newArr.slice(1) // [ 2, 3, 4, 5, 6, 7 ]
// let slicedVal2 = newArr.slice(1, 4) // [ 2, 3, 4 ]
// let slicedVal3 = newArr.slice( 0,3) // [ 10, 2, 3 ]
// //                           ( start, end-1 ) ( 1, 4-1 )
// console.log( slicedVal, slicedVal1, slicedVal2, slicedVal3 ); // [ 10, 2, 3, 4, 5, 6, 7 ] [ 2, 3, 4, 5, 6, 7 ] [ 2, 3, 4 ] [ 101, 2, 3 ]



//FLAT METHOD: The flat() method returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

let array1 = [1, 2, 3, 4, 5, [6, 7, 8]]; // nested array
array1.flat();
// console.log(array1); // [ 1, 2, 3,  4, 5, [ 6, 7, 8 ] ] it wil do a copy and return the same array

let flatMethod = array1.flat()
// console.log(flatMethod); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let array2 = [ 1, 2, 3, [ 4, 5, [ 6, 7, 8 ] ] ];
// let flatMethod2 = array2.flat()
// console.log(flatMethod2); // [ 1, 2, 3, 4, 5, [ 6, 7, 8 ] ] it removed only 1st nested array.
// If we need remove 2nd nested array we ahve to give value in the ring brackets Eg flat(2).

let flatMethod3 = array2.flat(2)
// console.log(flatMethod3); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let array3 = [ 1, 2, 3, [ 4, 5, [ 6, 7, 8 ], [9, 10], [11, 12, 13] ], [14, 15], [16, 17] ]; // Multiple nested array
// If we wat to flat multiple nested array, we can use flat(infinity) to get a single array.
let flatMethod4 = array3.flat(Infinity)
// console.log(flatMethod4); // [ 1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17 ]
 

// FILL METHOD: Flat method will not change the original array. It will return a new array with the elements filled with the value.
let arr = [100,200,300,400]
// arr.fill(1000);
// console.log(arr); // [ 1000, 1000, 1000, 1000 ]

// We can give indexes to fill the particular value:

arr.fill(1000, 0, 1);
arr.fill(1000, 3, 3);
console.log(arr); // [ 1000, 200, 300, 400 ]




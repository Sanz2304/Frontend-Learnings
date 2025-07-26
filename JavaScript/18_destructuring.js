// 23. DESTRUCTURING:
// Explaination: The destructuring is used to extract the elements of an array or object into another array or object.


// ARRAY:

let arr = [1,2,3,4,5];

// Normal way to access
// console.log(arr[0]); // 1

// let val = arr[1];
// console.log(val); // 2


// ES6 New Destructuring:

// let [a,b,c,d,e] = arr;
// console.log(c); // 3


// let [a,,,d,] = arr;
// console.log(a, d); // 1 4


// Destructuring using rest/spread perator

// let arr1 = [1,2,3,4,5,6,7,8,9,0];
// let [a, b, ...c] = arr1; // Rest operator should be in last
// console.log(a, b, c);

/* 

1 2 [ 3, 4, 5, 6, 7, 8, 9, 0 ]

*/


// Nested Array Destructuring:

let nestedArr = [1,2,3, [10,20,[30,40]] ]
let [a,b,c,[a1,a2,[a11, a12]]]  = nestedArr

console.log(a, a2, a11); // 1 20 30


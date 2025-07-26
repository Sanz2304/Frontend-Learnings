// 22. SPREAD OPERATOR
// Explanation: The spread operator is used to spread the elements of an array or object into another array or object. 

/* 

Syntax:

let arr1 = [1,2,3];
let arr2 = [4,5,6];

let arr3 = [...arr1, ...arr2];

*/

let arr1 = ['apple', 'mango', 'grape'];
let arr2 = ['guva', 'lemon', 'melon'];

let arr3 = [...arr1, ...arr2]; 

// console.log(arr3); // [ 'apple', 'mango', 'grape', 'guva', 'lemon', 'melon' ]

arr1[0] = "papaya";
// console.log(arr3, arr1); // [ 'apple', 'mango', 'grape', 'guva', 'lemon', 'melon' ] [ 'green apple' ] [ 'cherry' ]

arr4 = arr3;
// console.log(arr4, ['green apple'], ['cherry']);  // [ 'apple', 'mango', 'grape', 'guva', 'lemon', 'melon' ]


/* 

If we use normal method to concat the two arrays, we will face issue in reference and heap memory.
Because arrays are non-primitive/reference type values. For each element has memory address will be different.
See below examples:

*/

// let arr3 = arr1;
// console.log(arr3); // [ 'apple', 'mango', 'grape' ]
// console.log(arr3, arr2); // [ 'apple', 'mango', 'grape' ] [ 'guva', 'lemon', 'melon' ]

// If I alter the arr3 values this will affect arr2 values also:

// arr3[0] = 'orange';
// arr1[1] = 'musk'
// console.log(arr3); // [ 'orange', 'mango', 'grape' ]
// console.log(arr3, arr1); // [ 'orange', 'musk', 'grape' ] [ 'orange', 'musk', 'grape' ] it affect both arr3 ad arr1 elements.
// Because of this issue, We are using spead operator.




//Spread using Object:

let employeeDetails = {
    empName : "Santhosh",
    empId : "ID 1234",
}

let team2 = { ...employeeDetails, empId : "ID4567", empSalary : 1300000, team2Role : "Frontend" }
// console.log(team2);

/* 

{
  empName: 'Santhosh',
  empId: 'ID4567',
  empSalary: 1300000,
  team2Role: 'Frontend'
}

*/


//REST OPERATOR or PARAMETER:
// Explaination: The rest operator is used to collect the remaining elements of an array or object into another array or object.
// it should be the last parameter in the function.


// Normal function flow:
function restParam(arr){
    console.log(arr);
    
}
// restParam(1,2,3,4,5,6); // 1 because we passed only one parameter(arr)


// Rest operator or paramenter

function restParam(...arr){
    console.log(arr);
    
}
// restParam(1,2,3,4,5,6); // [ 1, 2, 3, 4, 5, 6 ]


// Multiple parameters:

// function restParam(a, b, ...arr){
//     console.log(arr);
    
// }
// restParam(1,2,3,4,5,6); // [ 3, 4, 5, 6 ] a and b is 1 and 2 added in the parameter but not in the arguments(console.log(arr)). So it will be 3,4,5,6.


function restParam(a, b, ...arr){
    console.log(a, b, arr);
    
}
restParam(1,2,3,4,5,6); // 1 2 [ 3, 4, 5, 6 ]


// function restParam(a, b, ...arr, d){ // This will throw an error(SyntaxError: Rest parameter must be last formal parameter). Because rest parameter should be the last parameter in the function.
//     console.log(a, b, arr);
    
// }
// restParam(1,2,3,4,5,6); 



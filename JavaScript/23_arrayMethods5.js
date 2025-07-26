// 24. ARRAY METHODS - HIGH ORDER METHOD-3:

// T. Some Method
// U. SORT Method 
// V. Every Method

// In this JS file we covered upto TO Every Method. Find remaining methods in next array method js files

// W. ForIn Method
// X. ForOf Method
// Y. Reduce Method
// Z. FindIndex METHOD



// SORT METHOD: This method used to sort the array based on the condition. It will return a new array. It will not change the original array.

let someArray = [20,40,10,20,5,20,70,10,50]

// Normal Sorting based ASCII Value:
let normalSort = someArray.sort();
// console.log(normalSort); // [ 10, 10, 20, 20, 20, 40, 5, 50, 70 ]

// Asending sort order:
let AscSort = someArray.sort( (a,b) => {return a-b} )
// console.log(AscSort); // [ 5, 10, 10, 20, 20, 20, 40, 50, 70 ]

// descending sort order:
let descSort = someArray.sort( (a, b) => { return b - a})
// console.log(descSort); // [ 70, 50, 40, 20, 20, 20, 10, 10, 5 ]




// let arr = [10,5,100,30,6,2]

// let newArr = arr.sort( (a,b)=>{ return a-b }  )

//Ascending
// a -b => postive, a>b  => swapping
// a - b => negative, a<b => no swapping

// a -b => 10 - 5 => 5 =>  [5,10,100,30,6,2]
// a -b => 10 - 100 => -90 =>  [5,10,100,30,6,2]
// a -b => 100 - 30 => 70 =>  [5,10,30,100,6,2]
//  [5,10,30,6,2,100]

// console.log( newArr );

//Descending
// b - a => positive, b>a => Swapping
// b- a => negative, b<a => no swapping

let newArr = [10,20,30,1,4,true, "100A"]

let descendingSort = newArr.sort( (a,b)=>{ return b-a } )

// b - a => 20 - 10 => 10 =>  [20,10,30,1,4,true, "100"]
// b - a => 30 - 10 => 20 =>  [20,30,10,4,1,true, "100"]
// b- a => true - 1 => 1 - 1 => 0 => [20,30,10,4,1,true, "100"]
// b- a => "100" - true => 100 - 1 => 90 => [20,30,10,4,1,"100", true]

//b - a => "100A" - true => NaN - true => NaN =>    [10,20,30,1,4,true, "100A"]


// console.log( descendingSort );



// SOME & EVERY: Some Method will return true if at least one element satisfies the condition. Every Method will return true if all elements satisfies the condition.

let arr1 = [10,2,30,40,5]

let value = arr1.some( (ele, ind, arr)=>{ // accepts 3 parameters
   return ele%2 == 0 // any one element should be even will return true
} )
let value1 = arr1.every( (ele, ind, arr)=>{ // accepts 3 parameters
   return ele%2 == 0 // any one element is not even will return false
} )

console.log( value, value1 ); // true false
// 24. ARRAY METHODS - HIGH ORDER METHOD-4:

// W. Reduce Method

// In this JS file we covered upto TO Reduce Method. Find remaining methods in next array method js files

// X. ForOf Method
// Y. ForIn Method 
// Z. FindIndex METHOD


// Sum of Array using For loop:

let sumArr = [10,20,30]
totalSum = 0

for(let i = 0; i < sumArr.length; i++){
    totalSum += sumArr[1];
}

// console.log(totalSum); // 60


// REDUCE METHOD: Reduce method is used to reduce the array to a single value. It will return a single value. It will not change the original array. It has 4 parameters called accumulator, currentValue, currentIndex, array.

/* 

Syntax:

let someArray = [1,2,3,4,5];
let someArrayValue = someArray.reduce(callbackFunction, initialValue);

callbackFunction(accumulator, currentValue, currentIndex, array){
  // code block to be executed
}

initialValue is optional. If not provided, it will take the first element of the array as the initial value.
*/

// Sum of array using Reduce method:

let totalSumReduce = sumArr.reduce( (accumulator, currentElement, index, array) => { return accumulator + currentElement }, 0)
// console.log(totalSumReduce); // 60



let employees = [
    {eName: "Xyz", salary:1000},
    {eName: "abc", salary:10000},
    {eName: "Kesavan", salary:20000},
    {eName: "Alex", salary:25000}
]

let calcTotalSal = employees.reduce( (a, s) => { return a + s.salary }, 0 )
console.log(calcTotalSal); // 56000

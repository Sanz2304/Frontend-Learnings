// 18. GENERATOR FUNCTION:
// Explanation: A generator function is a special type of function in JavaScript that returns a generator object. It can be used to generate a sequence of values, one at a time, using the yield keyword.

// function* generatorFunction(){
//     yield 'First Value'
//     yield 'Second Value'
//     yield 'Third Value'
// }

// let res = generatorFunction();
// console.log(res.next()); //{ value: 'First Value', done: false }
// console.log("PlaceHolder");
// console.log(res.next()); // { value: 'Second Value', done: false }
// console.log(res.next()); // { value: 'Third Value', done: false }
// console.log(res.next()); // { value: undefined, done: true }



// Using Return:

// function* generatorFunction(){
//     yield 'First Value'
//     yield 'Second Value'
//     yield 'Third Value'
//     return 'Final Val'
// }

// let res = generatorFunction();
// console.log(res.next()); //{ value: 'First Value', done: false }
// console.log("PlaceHolder");
// console.log(res.next()); // { value: 'Second Value', done: false }
// console.log(res.next()); // { value: 'Third Value', done: false }
// console.log(res.next()); // { value: 'Final Val', done: true }



// Getting Yeild Value:

function* generatorFunction(){
    yield 'First Value'
    yield 'Second Value'
    yield 'Third Value'
    return 'Final Val'
}

let res = generatorFunction();
console.log(res.next().value); // First Value
console.log("PlaceHolder");
console.log(res.next().value); // Second Value
console.log(res.next().done); // false
console.log(res.next().done); // true





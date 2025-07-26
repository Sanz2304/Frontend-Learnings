// 16. CURRYING FUNCTION:
//Currying is a technique of evaluating function with multiple arguments, into sequence of functions with single argument.

//Normal Function:

// function add(a,b,c){
//     console.log(a+b+c);
    
// }
// add(10,20,30);

//Currying Function:

function add(a){
    return function(b){
        return function(c){
            console.log(a+b+c);
            
        }
    }
}
// add(1)(2)(3);

let curry1 = add(100); // returns function(b)
// console.log(curry1); //[Function (anonymous)] Because, add(a) function returing a anonymous function.
let curry2 = curry1(200); // returns function(c)
// console.log(curry2); //[Function (anonymous)] Because, function(b) function returing a another anonymous function.
// curry2(); // NaN
curry2(300); // 600


// 17. SELF INVOKE FUNCTION:
// Explaination: The self invoke function is a function that is called immediately after it is defined.

// Normal Function:

// function normalFunc(){
//     console.log("Normal Function I can call whenever I want");
// }
// normalFunc();

// Self Invoke Function or IIFE - Immediate Invoked Function Expression:

// (function () {
//     console.log("Self Invoke Function");
// })() // Self Invoke Function

// (function (userName, userAge) {
//     console.log(`Self Invoke Function - Helo ${userName} your age is ${userAge}!`);
// })("Santhosh", 25);

// (function namedSelfInvokeFunc(userName, userAge) { // If you add name there no diffrent, we can use without function name
//     console.log(`Self Invoke Function - Helo ${userName} your age is ${userAge}!`);
// })("Santhosh", 25);

// namedSelfInvokeFunc(); //reference error: function is not defind



//CLOSURE FUNCTION:
// Explanation: A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables, even after the outer function has finished executing. This allows the inner function to "remember" the environment in which it was created.

function outerFunction(){
    let outerWords = "I'm from outer Scoper!"
    function innerFunction(){
        console.log(outerWords);
    }
    return innerFunction;
}
let innerFun = outerFunction(); // empty will come
innerFun();


// function outsideFunction(outerVar) {
//   const outerVariable = outerVar

//   const localState = 'I will be visible only in this block'

//   const insideFunction = (innerVar) => {
//     console.log('Outer variable', outerVariable)

//     console.log('Inner variable', innerVar)

//     console.log('Outer variable (local)', localState)
//   }

//   return insideFunction
// }

// const myClosure = outsideFunction('outside')

// myClosure('inner')

function points(totalPointsArg) {
  console.log('Outside: Function running')
  const totalPoints = totalPointsArg

  // ADD, REMOVE, getTotalPoints
  const addPoints = (points) => {
    return totalPoints + points
  }

  const removePoints = (points) => {
    return totalPoints - points
  }

  const getTotalPoints = () => {
    return totalPoints
  }

  return { addPoints, removePoints, getTotalPoints }
}

const table = points(100)
console.log(table.addPoints(40))
console.log(table.removePoints(20))
console.log(table.getTotalPoints())
// 10. CONTROL STATEMENT
// EXPLAINATION: Control statements are used to control the flow of execution in a program based on certain conditions. They allow you to execute different blocks of code depending on whether a condition is true or false.

// A. IF STATEMENT

/* 

Syntax:

if (condition) {
    // code to be executed if condition is true
}

*/

// let age = 25

// if (age >= 18) {
//     console.log("You are an adult.");
// }

// B. IF-ELSE STATEMENT

/*

Syntax:

if (condition) {
    // code to be executed if condition is true
}
else {
    // code to be executed if condition is false
}

*/

// let age = 16;

// if (age >= 18){
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

// C. IF ELSE IF STATEMENT

/*

Syntax:

if (condition1) {
    // code to be executed if condition1 is true
}
else if (condition2) {
    // code to be executed if condition2 is true
}
else if (condition3) {
    // code to be executed if condition3 is true
}
else if (condition n) {
    // code to be executed if condition n is true
}
else {
    // code to be executed if none of the conditions are true
}

*/

// let marks = 85;

// if (marks >= 41 && marks < 60) {
//     console.log("You have passed with a C grade.");
// } else if (marks >= 61 && marks < 80) {
//     console.log("You have passed with a B grade.");
// } else if (marks >= 81 && marks < 100) {
//     console.log("You have passed with an A grade.");
// } else if (marks == 100) {
//     console.log("You have passed with an A+ grade.");
// } else {
//     console.log("You have failed.");
// }

// D. SWITCH STATEMENT

/*

Syntax:

switch (expression) {
    case value1:
        // code to be executed if expression matches value1
        break;
    case value2:
        // code to be executed if expression matches value2
        break;
    // more cases...
    default:
        // code to be executed if no cases match
}

*/

// let trafficLight = "exas";

// switch (trafficLight) {
//     case "red":
//         console.log("Stop! The light is red.");
//         break;
//     case "yellow":
//         console.log("Get ready! The light is yellow.");
//         break;
//     case "Green":
//         console.log("Go! The light is green.");
//         break;
//     default:
//         console.log("Invalid traffic light color.");
//         break;
// }

// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number. Please enter a number between 1 and 7.");
//         break;
// }

// // Fallthrough Example

// let Day = 'Saturday';

// switch (Day) {
//   case "Monday":
//   case "Tuesday":
//   case "Wednesday":
//   case "Thrusday":
//   case "Friday":
//     console.log("It's a weekday.");
//     break;
//   default:
//     console.log("It's a weekend.");
//     break;
// }


// E. NESTED IF STATEMENT

// Syntax:
/*
if (condition1) {
    if (condition2) {
        // code to be executed if both condition1 and condition2 are true
    } else {
        // code to be executed if condition1 is true but condition2 is false
    }
} else {
    // code to be executed if condition1 is false
}
*/

// let age = 20;
// let hasPermission = true;
// if (age >= 18) {
//     if (hasPermission) {
//         console.log("You can enter the club.");
//     } else {
//         console.log("You need permission to enter the club.");
//     }
// } else {
//     console.log("You are not old enough to enter the club.");
// }


// F. TERNARY OPERATOR

// Syntax:

// condition ? expressionIfTrue : expressionIfFalse

let age = 25;

let result = (age >= 18) ? "You are an 20s Man" : "You are a child teen";

console.log(result);



function getStatusMessage(age, isMember) {
    return age >= 18
      ? isMember
        ? 'Adult member'
        : 'Adult Guest'
      : 'Access denied. Minors are not allowed.'
  }
  
  const user1 = { age: 20, isMember: true }
  const user2 = { age: 20, isMember: false }
  const user3 = { age: 16, isMember: true }
  
  console.log(getStatusMessage(user1.age, user1.isMember))
  // Output: Welcome, adult member!
  console.log(getStatusMessage(user2.age, user2.isMember))
  // Output: Welcome, adult guest!
  console.log(getStatusMessage(user3.age, user3.isMember))
  // Output: Access denied. Minors are not allowed.
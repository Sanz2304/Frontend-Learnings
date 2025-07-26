// 35. MODULES IN JAVASCRIPT:

/* 

Modules are used to break down the code into smaller parts.
Modules are used to make the code more readable, reusable, testable, secure and maintainable.

It user .mjs extension to create the modules.
It has 2 keywords to import and export the modules.

import : It is used to import the modules.
export : It is used to export the modules.

mjs file is used to create the modules.

It has 2 types of modules:
1. Named Modules : It is used to import the modules with the name.
2. Default Modules : It is used to import the modules without the name. We can use only one default module in a file.


*/


// main.mjs: // its a main file


// Scenario 1:
// import { userDetails } from "./loginPage.mjs";  // its import the userDetails from loginPage.mjs file

// Scenario 2 default module:
// import userDetails  from "./loginPage.mjs";  // its import the userDetails from loginPage.mjs file 

import personDetails  from "./loginPage.mjs";  // its import the userDetails from loginPage.mjs file. We can change the name of the variable and it will print the userDetails from loginPage.mjs file

// Scenario 1:
// import { employeeDetails } from "./signUpPage.mjs"; // its import the employeeDetails from signUpPage.mjs file

// Scenario 3 : Named Modules
import { employeeDetails as empDetails } from "./signUpPage.mjs"; // its import the employeeDetails from signUpPage.mjs file and we can change named module of the variable as we want.

function application(){

// console.log( userDetails ); // its print the userDetails from loginPage.mjs file

// Scenario 2 default module:
console.log(personDetails); // We have to use the same name of the variable as the name of the module.

// console.log(employeeDetails); // its print the employeeDetails from signUpPage.mjs file

// Scenario 3 : Named Modules
console.log(empDetails); // its print the employeeDetails from signUpPage.mjs file


/* 

{ userName: 'Santhosh', userAge: 25 }
{ empName: 'Sheetal', empID: 'ID 124' }

*/

    
}

application();



// SEE MORE EXPLAINATION FOR MODULES IN UNIQ TECHNOLOGIES JS YT VEDIO:
// -> Using multiple elements like function, variable, etc in main js file
// -> creating package.json
// -> Setting type as module for entire project

// 29. FUNCTION METHODS - CALL, APPLY, BIND

// Understanding the 'this' keyword:

let employee = {
  empName : "Santhosh",
  empSalary : 100000,
  empRoleDetails : function(a, b){ // anonymous function
    // console.log( a + b + this.empSalary); // 'this' is used to access the properties of the object. This is only for anonymous function.
  }
}
// console.log(employee.empName); // Santhosh
// employee.empRoleDetails(10, 20); // 100030



// Scenario 2: 
eSalary = 200000; // Just declare the variable in global scope without using 'var', 'let', 'const'
// var eSalary = 200000; // Declare the variable in global scope using 'var'
// let eSalary = 200000; // Declare the variable in global scope using 'let'

// Scenario 1:
let employee1 = {
  empName : "Santhosh",
  empSalary : 100000,
  empRoleDetails : (a, b) => { // arrow function
    // scenario : 1
    // console.log( a + b + this.empSalary); // 'this.empSalary' is undefined in arrow function. Because arrow function doesn't have its own 'this' keyword. It will take the 'this' keyword from the Global scope.

    // scenario : 2
    // console.log(eSalary);

  }
}
// Scenario 1:
// employee1.empRoleDetails(10, 20); // NaN (10 + 20 + undefined)

// Scenario 2:
// employee1.empRoleDetails(10, 20); // 200000



// Function Call Method : functionName.call() is used to call the function with the object from one object to another object.

let person1 = {
  empFname : "Sheetal",
  empLname : "Santhosh Kumar",
}

let person2 = {
  empFname : "Santhosh",
  empLname : "Kumar",
  empRoleDetails : function(a, b){ // anonymous function
    console.log( a + b + this.empFname + " " + this.empLname); // Santhosh Kumar
  }
}

person2.empRoleDetails.call(person1, 10, 20); // 30Sheetal Santhosh Kumar

// Function Apply Method : functionName.apply() is used to call the function with the object from one object to another object.
// The only difference between call and apply is that call takes the arguments as a comma separated values and apply takes the arguments as an array.

person2.empRoleDetails.apply(person1, [100, 200]); // 300Sheetal Santhosh Kumar

// Function Bind Method : functionName.bind() is used to call the function with the object from one object to another object.
// The only difference between call and bind is that call immediately calls the function and bind returns the function.
// bind returns the function and we can call the function later.

person2.empRoleDetails.bind(person1, 500, 600); // It will not return anything in code editor output. Because it is not calling the function.
person2.empRoleDetails.bind(person1, 500, 600)(); // 1100Sheetal Santhosh Kumar Here we are calling the function.

let callFunction = person2.empRoleDetails.bind(person1, 500, 600); // another way to call the function.
callFunction(); // 1100Sheetal Santhosh Kumar
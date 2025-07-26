// its a module file


// Scenario 1:
// export let userDetails = { // its export the userDetails to main.mjs file
//     userName : 'Santhosh',
//     userAge : 25
// }


// Scenario 2:
// Default Module
let userDetails = { 
    userName : 'Santhosh',
    userAge : 25
}

export default userDetails; // its export the userDetails to main.mjs file. We can use only one default module in a file.
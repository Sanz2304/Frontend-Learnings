// Promise.all() method is used to wait for all promises to resolve
// It returns a new promise that resolves when all promises resolve
// It rejects when any of the promises reject


const p1 = new Promise((resolve,reject) => {
    setTimeout( () => {
        resolve('Okay, I got the value!')
    }, 1000)
})


const p2 = Promise.resolve('Promise-2') 

const p3 = 123456 // This is a non-promise value, it will be ignored by Promise.all() method, But it will be included in the responses array

const p4 = Promise.reject('Promise-4') 


Promise.all([p1,p2,p3,p4]).then( (responses) => { // Promise.all() method takes an array of promises as an argument
    console.log('Responses : ', responses);
    
})
.catch( (error) => {
    console.error('Error : ', error); // This will be executed if any of the promises reject
    
})




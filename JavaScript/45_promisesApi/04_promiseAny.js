/* 
    Promise.any() method is used to wait for the first promise to be resolved.
    It returns a promise that resolves to the value of the first promise that is resolved.
    If all promises are rejected, it returns a promise that rejects with an AggregateError.

    Promise.any() method is introduced in ES2021, ES12.

    Promise.any() method is similar to Promise.race() method, but it does not wait for all promises to be settled.

*/



const promise1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('promise-1')
    }, 2000)
})
const promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('promise-2')
    }, 200)
})
const promise3 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('promise-3')
    }, 300)
})
const promise4 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        reject('promise-4')
    }, 50)
})

const allPromises = [promise1, promise2, promise3, promise4]

Promise.any(allPromises)
.then( (res) => {
    console.log(res); // Promise.any() method returns the value of the first promise that is resolved
    // Here, Promise 2 is resolved first, so it is returned
    // Even if promise reject, it will return the value of the first promise that is resolved
    // If all promises are rejected, it will return a promise that rejects with an AggregateError
    
})
.catch( (e) => {
    console.log(e);
})


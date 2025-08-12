/* 
    Promise.race() method is used to wait for the first promise to be settled, whether it is resolved or rejected.
    It returns a promise that resolves to the value of the first promise that is settled.

    Promise.race() method is similar to Promise.all() method, but it does not wait for all promises to be settled.

    Promise.race() method is introduced in ES2015, ES6.

*/


const promise1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Promise 1')
    },1000)
})

const promise2 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve('Promise 2')
    },500)
})

const allPromises = [promise1, promise2]

Promise.race((allPromises))
.then( (response) => {
    console.log(response); // Promise.race() method returns the value of the first promise that is settled
    // Here, Promise 2 is settled first, so it is returned
    // Even if promise reject, it will return the value of the first promise that is settled
})
.catch( () => {

})
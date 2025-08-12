/*  
    Promise.allSettled() method is used to wait for all promises to be settled, whether they resolve or reject.
    It returns a promise that resolves to an array of objects that contain the status and value of each promise.

    Promise.allSettled() method is similar to Promise.all() method, but it does not reject the promise if any of the promises reject.

    Promise.allSettled() method is introduced in ES2020, ES11.

*/



const promise1 = new Promise( (resolve, reject) => {
    setTimeout( () => {
        reject('API ERROR')
    }, 1000)
})

const promise2 = Promise.resolve('Santhosh')

const allPromises = [promise1, promise2]

Promise.allSettled(allPromises)
.then((responses) => { // Promise.allSettled() method takes an array of promises as an argument
    responses.forEach((res) => {
        if (res.status === 'fulfilled') { // If the promise is resolved (fulfilled)
            console.log('Value : ', res.value);
        } else { // If the promise is rejected (rejected)
            console.log('Reason : ', res.reason);
        }
    });

    // console.log(responses);

}).catch((error) => {
    console.error(error)
})
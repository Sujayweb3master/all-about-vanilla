

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p1 success!!")
        reject(new Error('p1 failed!!'))
    }, 3000);
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p2 success!!")
        reject(new Error('p2 failed!!'));
    }, 5000);
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("p3 success!!")
        reject(new Error('p3 failed'))
    }, 2000);
})

// Promise.all():
// will wait for all to be fulfilled

// async function callApi() {
//     try {
//         const result = await Promise.all([p1, p2, p3])
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// }

// callApi()

// Promise.allSettled() 

// async function callApi() {
//     try {
//         const result = await Promise.allSettled([p1, p2, p3])
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// }

// callApi()

// // for one rejected, output:

// const output = [
//     {
//         "status": "fulfilled",
//         "value": "p1 success!!"
//     },
//     {
//         "status": "fulfilled",
//         "value": "p2 success!!"
//     },
//     {
//         "status": "rejected",
//         "reason": "p3 failed"
//     }
// ]

// Promise.race():
// waits for first promise to be settled, it can be 'fulfilled' or 'rejected'

// async function callApi() {
//     try {
//         const result = await Promise.race([p1, p2, p3])
//         console.log(result)
//     } catch (error) {
//         console.error(error)
//     }
// }

// callApi()


// Promise.any():
// It will wait for first fulfilled (successful) promise. 
// If all of them fail, then it will return aggregated errors list. 

async function callApi() {
    try {
        const result = await Promise.any([p1, p2, p3])
        console.log(result)
    } catch (error) {
        console.error(error)
        console.log(error.errors)
    }
}

callApi()

// aggregated error:

// script.js:92 AggregateError: All promises were rejected
// callApi @ script.js:92
// await in callApi
// (anonymous) @ script.js:96

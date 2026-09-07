//1
// const cart = ['shirt', 'mug', 'pant', 'skirt'];


// const promise = createOrder(cart); // orderId 
// console.log(promise)
// promise.then(function (orderId) {
//     // proceedToPayment(orderId);
//     console.log(orderId)
// })
//     .catch(function (error) {
//         console.log(error.message)
//     })

// // Producer

// function createOrder(cart) {

//     const pr = new Promise(function (resolve, reject) {
//         // validate cart
//         // create order
//         // return orderId
//         if (!validateCart(cart)) {
//             reject(new Error('cart validation failed'))
//         }
//         // logic for create order
//         const orderId = '112';
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 5000);
//         }
//     })

//     return pr;
// }

// function validateCart(cart) {
//     return false
// }

//--------------------------------------------

//2
// const cart = ['shirt', 'mug', 'pant', 'skirt'];


// createOrder(cart)
//     .then(function (orderId) {
//         console.log(orderId)
//         return orderId;
//     })
//     .then(function (orderId) {
//         return proceedToPayment(orderId)
//     })
//     .then(function (paymentInfo) {
//         console.log(paymentInfo)
//     })
//     .catch(function (error) {
//         console.log(error.message)
//     })
//     .then(function () {
//         throw new Error('error with message')
//         console.log('called even if there was an error')
//     })
//     .catch(function (error) {
//         console.log(error.message)
//     })

// // Producer

// function createOrder(cart) {

//     const pr = new Promise(function (resolve, reject) {
//         // validate cart
//         // create order
//         // return orderId
//         if (!validateCart(cart)) {
//             reject(new Error('cart validation failed'))
//         }
//         // logic for create order
//         const orderId = '112';
//         if (orderId) {
//             setTimeout(function () {
//                 resolve(orderId);
//             }, 1000);
//         }
//     })

//     return pr;
// }

// function validateCart(cart) {
//     return false
// }

// function proceedToPayment(orderId) {
//     // payment 
//     return new Promise(function (resolve, reject) {
//         resolve("Payment successful");
//     })
// }


//--------------------------------------------------

//H.W.

createOrder
proceedToPayment
showOrderSummary
updateWallet
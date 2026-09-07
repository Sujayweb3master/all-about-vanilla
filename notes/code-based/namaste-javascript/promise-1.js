
// const cart = ['shirt', 'mug', 'pant', 'skirt'];

// createOrder(cart, function (orderId) {
//     proceedToPayment(orderId)
// })


// fetch('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
//     // console.log('response', response.json())
//     return response.json()
// }).then(function (json) {
//     console.log(json)
// }).catch(function (error) {
//     console.error(error)
// }) 

const apiEndpoint = 'https://jsonplaceholder.typicode.com/todos/1';

//-------------------------------------
// const user = fetch(apiEndpoint)

// console.log(user)

// user.then(function (data) {
//     console.log(data)
// })

//-------------------------------------

fetch(apiEndpoint)
    .then(function (data) {
        console.log(data)
        return data.json()
    })
    .then(function (data) {
        console.log(data)
    })


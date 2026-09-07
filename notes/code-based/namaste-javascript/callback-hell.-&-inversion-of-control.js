
const cart = ['shotes', 'shirts', 'pants'];

api.createOrder(cart, function () {

    api.proceedToPayment(function () {

        api.showOrderSummary(function () {
            // pyramid of DOOM
            api.updateWallet()
        })
    })
})


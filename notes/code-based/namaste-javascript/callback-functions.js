// callback functions in javascript

//1
// setTimeout(function () {
//     console.log('timer');
// },5000)

// function x(y) {
//     console.log('x')
//     y();
// }

// x(function y() {
//     console.log('y')
// })

//2
function ButtonClickCounter() {
    let buttonClickedCount = 0;

    const storedValue = localStorage.getItem('button-clicked-count');
    if (storedValue) {
        buttonClickedCount = storedValue
    }

    document.querySelector('.clickMeButton').addEventListener("click", function buttonClickAction() {
        buttonClickedCount++
        console.log('button is clicked (from beginning):', buttonClickedCount)

        localStorage.setItem('button-clicked-count', buttonClickedCount)

    })
}

ButtonClickCounter()

//1. 
// function counter() {
//     var count = 0;
//     return function incrementCount() {
//         count++;
//         console.log(count)
//     }
// }

// var counterOne = counter();
// counterOne();
// counterOne();

// var counterTwo = counter()
// counterTwo();

// function constructor :
// function Counter() {
//     var count = 0;

//     this.incrementCount = function() {
//         count++;
//         console.log(count)
//     }

//     this.decrementCount = function() {
//         count--;
//         console.log(count);
//     }
// }

// var counterOne = new Counter();
// counterOne.incrementCount();
// counterOne.incrementCount();
// counterOne.decrementCount();

// var counterTwo = counter()
// counterTwo();

//3


//my code:
// function counter () {

//     let count = 0;

//     function incrementCounter () {
//         count++;
//     }

//     function decrementCounter () {
//         count--;
//     }

//     function setCount(value) {
//         count = value;
//     }

//     function getCounter () {
//         return count;
//     }

//     return {
//         incrementCounter, decrementCounter,
//         setCount,
//         getCounter
//     }
// }

// const newCounterOne = counter() 

// newCounterOne.incrementCounter();
// console.log('count in newCounterOne', newCounterOne.getCounter());


// const newCounterTwo = counter() 

// newCounterTwo.incrementCounter();
// newCounterTwo.incrementCounter();
// newCounterTwo.incrementCounter();
// console.log('count in newCounterTwo', newCounterTwo.getCounter());


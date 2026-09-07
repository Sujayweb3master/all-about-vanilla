//1
console.log('Start');

setTimeout(function cb() {
    console.log('Callback in timeout');
}, 5000);

console.log('end');

// million lines of code
// we mimic it using while 
let startTime = new Date().getTime();
let endTime = startTime;
while(endTime <= startTime + 10000) {
    endTime =  new Date().getTime();
}

console.log('while is expired')


//2 
// console.log('Start');

// setTimeout(function cb() {
//     console.log('Callback in timeout');
// }, 0);

// console.log('end');
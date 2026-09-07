// function x() {
//     console.log("Namaste")
// }

// function y(x) {
//     x();
// }


const radius = [3, 8, 11, 23];

const areaLogic = function (radius) {
    return (Math.PI * radius * radius)
}

const circumferenceLogic = function (radius) {
    return (2 * Math.PI * radius)
}

const diameterLogic = function (radius) {
    return (2 * radius)
}

// in a way our implementation of map()
// const calculate = function (arr, logic) {

//     const output = [];

//     for (let i = 0; i < arr.length; i++) {
//         output.push(logic(arr[i], i, arr))
//     }

//     return output
// }

// console.log(calculate(radius, areaLogic));
// console.log(radius.map(areaLogic))


//2 

// proper implementation of kind of our own map() 
// this is how we usually write polyfills. 
Array.prototype.calculate = function (logic) {

    const output = [];

    for (let i = 0; i < this.length; i++) {
        output.push(logic(this[i], i, this))
    }

    return output
}

console.log(radius.calculate(areaLogic))
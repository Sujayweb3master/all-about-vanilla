


// Function statement aka Function Declaration
function x() {
    console.log('x is called')
}

// Function expression
var y = function () {
    console.log('call function from y ')
}

x()
y()

// Anonymous function
// will throw error (Syntax error: Function statements require a function name)
// function () {

// }

// Named Function Expression
var a = function abc() {
    console.log('abc');
}

// Difference between parameters and arguments
var c = function (param1, param2) {
    console.log(param1)
    console.log(param2)
}

const arg1 = 10;
const arg2 = 20;
c(arg1, arg2)

// First class functions

function abc(fn) {
    fn();
}

function xx() {
    console.log('xx');
}

abc(xx)

//or 

function yy() {
    return function aa() {
        console.log('aa');
    }
}

// Arrow functions


// Currying
// Definition

// Currying transforms a function that takes multiple arguments into a sequence of functions, each taking exactly one argument, where each function returns the next function in the chain until all arguments have been supplied — at which point the final result is computed.

//                              f(a,b,c)→f(a)(b)(c)

function curry(fn) {

    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }

        return function (...restArgs) {
            return curried.apply(this, [...args, ...restArgs])
        }
    }
}


function addThreeValues(a, b, c) {

    return a + b + c;
}


const curriedAddThreeValues = curry(addThreeValues)

console.log(curriedAddThreeValues(1, 2, 3))

const addFiveWithTwoValues = curriedAddThreeValues(5);

console.log(addFiveWithTwoValues(10)(10))
console.log(addFiveWithTwoValues(10)()(10))

console.log('--------------------------------------------------------------');
// ------------------------------------------------------------------------------

function apiRequest(baseUrl, method, endpoint, payload) {
    console.log(`${method} ${baseUrl}${endpoint}`, payload ?? "");
}

const postToApi = curry(apiRequest)("https://api.nabh.internal")("POST")

postToApi("/standards", { title: "New Standard" })

console.log('--------------------------------------------------------------');
// ------------------------------------------------------------------------------

// Partial Application

// Definition
// Partial application takes a function and pre-fills some of its arguments, returning a new function that accepts the remaining arguments and, when called, invokes the original with all of them combined.

function partial(fn, ...initialArgs) {
    return function (...retArgs) {
        return fn(...initialArgs, ...retArgs)
    }
}


console.log('--------------------------------------------------------------');
// ------------------------------------------------------------------------------

// 4. Function Composition
// Definition and mathematical intuition

// Composition combines two or more functions into a single new function, where the output of one becomes the input of the next. This mirrors mathematical function composition:
//                      (f∘g)(x)=f(g(x))

function compose(...fns) {
    console.log(fns);

    return function (args) {
        return fns.reduceRight((acc, fn) => fn(acc), args)
    }
}

// pipe — left-to-right (often more intuitive to read)

function pipe(...fns) {
    return function (initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}

function pipe(...fns) {
    return function (...args) {
        const [first, ...rest] = fns;
        return rest.reduce((acc, fn) => fn(acc), first(...args));
    };
}

const add = (a, b) => a + b;
const double = (x) => x * 2;

const addThenDouble = pipe(add, double);
addThenDouble(3, 4); // add(3, 4) = 7, then double(7) = 14 — first fn took TWO args


function toLowerCase(str) {
    console.log('in lowercase', str);

    return str.toLowerCase()
}

function trim(str) {
    console.log(str);
    console.log(typeof str);

    return str.trim()
}


const trimAndToLowerCase = compose(toLowerCase, trim)

console.log(trimAndToLowerCase(' ASDF '));

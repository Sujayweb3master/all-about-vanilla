"use strict"

// console.log('global', this)

// function func1() {
//     let var1 = 10;
//     let var2 = 2;

//     console.log('fun1', this)

// }

// function func2() {
//     let func2Var1 = 20;
//     let func2Var2 = 30;

//     function nestedfunc2() {
//         console.log('nestedfunc2', this)
//     }

//     nestedfunc2()
// }

// function func3() {
//     let func3Var1 = 20;

//     setTimeout(function () {
//         console.log('func3', this);
//     }, 500)
// }

// function func4() {
//     let func4Var1 = 20;
//     let func4Var2 = 30;

//     function nestedfunc4() {
//         let nestedfunc4Var = 11;

//         function nestedNestedfunc4() {
//             console.log('nestedNestedfunc4', this)
//         }

//         setTimeout(nestedNestedfunc4, 100)
//     }

//     nestedfunc4()
// }

// function init() {

//     func1()
//     func2()
//     func3()
//     func4()

// }

// init()

// const obj = {
//     name: "Sujay",
//     outer() {
//         console.log("outer this.name:", this.name); // "Sujay" — implicit binding, called as obj.outer()

//         function inner() {
//             console.log("inner this.name:", this.name);
//         }

//         inner(); // called bare — no object before the dot
//     }
// };

// obj.outer();

const obj = {
    name: "Sujay",
    outer() {
        const self = this;
        function inner() {
            console.log(this);
        }

        const innerArrowFunction = () => {
            console.log(this.name)
        }

        inner();
        innerArrowFunction();
    }
};

obj.outer();

const obj1 = {
    name: "Sujay",
    outer() {

        (function () {
            console.log(this); // undefined (strict) — IIFE is a bare call, no exceptions
        })();
    }
};

obj1.outer();
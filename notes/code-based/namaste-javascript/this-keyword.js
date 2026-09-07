"use strict";
// this inside global space

// console.log(this)  // 'this' in global space always represents globalObject. 
// globalObject = window (in browser) and global (in nodejs)

// this inside a function
// it behaves differently in strict/ non-strict modes. 
function x() {
    console.log(this)
}

// 'this' keyword also depends on how the function is called. 

// x()  // undefined

// window.x(); // window


// 'this' inside a object's method

const student = {
    name: 'Sujay',
    printName: function () {
        console.log(this.name)
    }

}

student.printName();

const student2 = {
    name: 'Arun',
}

student.printName.call(student2)

// this inside arrow function

const object1 = {
    a: 10,
    x: () => {
        console.log(this)
    }
}

object1.x();

const object2 = {
    a: 10,
    x: function () {
        // enclosing lexical context
        const y = () => {
            console.log(this)
        }
        y();
    }
}

object2.x()

// this inside DOM
// 'this' inside DOM elements => reference to HTML element.


// this inside class, constructor 
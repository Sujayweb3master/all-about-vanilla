// // 1 
// const user = {
//     name: "Sujay",
//     greet() {
//         console.log(this);

//         console.log(`Hi, I'm ${this.name}`);
//     }
// };

// // implicit binding
// user.greet();

// const extractedGreet = user.greet;

// // default binding
// extractedGreet()

// // 2
// // Nested objects — only the last dot matters

// const company = {
//     name: "Acme",
//     team: {
//         name: "Frontend",
//         describe() {
//             console.log(this.name);
//         }
//     }
// };

// company.team.describe();

// // Common real-world gotcha: callbacks

// const timer = {
//     seconds: 0,
//     start() {
//         console.log('this in start', this)
//         setTimeout(function () {
//             this.seconds++;
//             console.log(this.seconds);
//         }, 1000);
//     }
// };

// timer.start();

// // 3

// // Call, Apply and Bind

// function introduce(greeting, punctuation) {

//     console.log(`${greeting}, I'm ${this.name} ${punctuation}`)
// }

// const person = {
//     name: 'Sujay'
// }

// introduce.call(person, 'Hello', '!!', 'asdf')

// introduce.apply(person, ['Hola', '==', 12])

// const invokeIntroduction = introduce.bind(person, 'Hi', '^^')

// invokeIntroduction()

// const bindedTimer = {
//     seconds: 0,
//     start() {
//         setInterval(function () {
//             this.seconds++;
//             console.log(this.seconds);
//         }.bind(this), 1000);
//     }
// };

// bindedTimer.start();

// 4

// Arrow functions:

const obj = {
    name: "Sujay",
    regularGreet: function () {
        console.log(this.name); // implicit binding → "Sujay"
    },
    arrowGreet: () => {
        console.log(this); // lexical — looks at *outer* scope, not `obj`
    }
};

obj.regularGreet()
obj.arrowGreet()

function makeObj() {

    const obj = {
        name: "Sujay",
        arrowGreet: () => {
            console.log(this.name)
        }
    };
    return obj;
}

makeObj.call({ name: "Injected" }).arrowGreet()

const makeObj2 = () => {

    const obj = {
        name: "Sujay",
        arrowGreet: () => {
            console.log(this)
        }
    };
    return obj;
}

makeObj2.call({ name: "Injected" }).arrowGreet()

console.log('global this', this)
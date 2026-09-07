// const animal = {
//     eats: true
// }

// const dog = {
//     barks: true
// }

// Object.setPrototypeOf(dog, animal)

// console.log(Object.getPrototypeOf(dog) === animal);
// console.log(dog.__proto__ === animal)
// console.log(Object.getPrototypeOf(animal));

// console.log(dog);

// function Dog(name) {
//     this.name = name;

// }

// function cat(name) {
//     this.name = name;
// }

// console.log(Dog.prototype)

// const gullu = new Dog('Gullu')
// console.log(gullu);
// console.log(Object.getPrototypeOf(gullu));
// console.log(Object.getPrototypeOf(gullu) === Dog.prototype);

// const obj1 = {
//     obj1Attr1: 'asdf'
// }

// const obj2 = {
//     obj2Attr1: '124'
// }
// const obj3 = {
//     obj3Attr1: 'qwer'
// }
// const obj4 = {
//     obj4Attr1: 'zxcv'
// }

// Object.setPrototypeOf(obj4, obj3)
// Object.setPrototypeOf(obj3, obj2)
// Object.setPrototypeOf(obj2, obj1)


// console.log(obj4.hasOwnProperty('obj3Attr1'))

// const animal = {
//     eats: true,
//     describe() {
//         return `Eats: ${this.eats}`;
//     }
// };

// const dog = Object.create(animal); // dog's [[Prototype]] = animal
// dog.barks = true;
// dog.eats = false;

// console.log(dog);
// console.log(dog.barks);
// console.log(dog.eats);
// console.log(dog.describe()); // "Eats: true" — method found on `animal`, but `this` = dog

// for (const key in obj1) {
//     console.log(key); // "barks", then "eats" — for...in walks the WHOLE chain
// }

// console.log(Object.keys(dog))
// console.log(Object.entries(dog))
// console.log(Object.getOwnPropertyNames(dog))

// // Which functions do get a prototype property:

// // - Regular function declarations/expressions: function foo() {}
// // - Function constructors created via class
// // - Generator functions

// // Which do NOT get one:

// // - Arrow functions (() => {})
// // - Methods defined with shorthand syntax in object literals or classes are a bit nuanced — regular methods do have internal callable behavior but their prototype is not automatically created the same way as function declarations in some engines... actually let's be precise here, since this is a common point of confusion:

// const person = Object.create(null, {
//     name: {
//         value: "Sujay",
//         writable: true,
//         enumerable: false,
//         configurable: true
//     },
//     age: {
//         value: 25,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

// const newPerson = Object.create(person)

// console.log(newPerson);

// for (const key in newPerson) {
//     console.log(key);

// }


// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//     eat() {
//         console.log(`${this.name} eats`);
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log(`${this.name} barks`);
//     }
// }

// const rex = new Dog("Rex");

// console.log(Object.getPrototypeOf(rex) === Dog.prototype)               // true
// console.log(Object.getPrototypeOf(Dog.prototype) === Animal.prototype)  // true — `extends` just wires up [[Prototype]] links

// rex.eat();  // delegated up to Animal.prototype
// rex.bark(); // found on Dog.prototype


// -------------------------

class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats`);
    }
}

function Dog(name) {
    Animal.call(this, name); // manually invoke parent constructor logic
}

console.log(Dog);
console.log(Dog.prototype);
console.log('----------------------');


Dog.prototype = Object.create(Animal.prototype); // wire up the chain

console.log(Dog.prototype);
console.log(Dog.prototype.constructor);
console.log('----------------------');

Dog.prototype.constructor = Dog; // restore the constructor reference Object.create wiped out

console.log(Dog.prototype);
console.log(Dog.prototype.constructor);

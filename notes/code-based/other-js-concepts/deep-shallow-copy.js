// https://claude.ai/chat/037f1cd8-26cc-450a-9213-eed5833c7b59
// Shallow Copy
// Definition

// A shallow copy creates a new top-level object/array, but only copies one level deep. Any property whose value is itself a reference type (a nested object/array) is not duplicated — the new copy's nested property still points to the same heap location as the original.


const obj1 = {
    attr1: 'value1',
    attr2: 150,
    attr3: {
        attr3Attr1: 'Hey there',
        attr3Attr2: 200,
        attr3Attr3: {
            level2Attr1: 'new thing',
            level2Attr2: 400
        }
    }
}

const obj2 = { ...obj1 }
const obj3 = { ...obj1, attr3: { ...obj1.attr3, attr3Attr3: { ...obj1.attr3.attr3Attr3 } } }

// console.log(obj2.attr3.attr3Attr3.level2Attr2)
// obj2.attr3.attr3Attr3.level2Attr2 = 500;
// console.log(obj1.attr3.attr3Attr3.level2Attr2)


// console.log(obj3.attr3.attr3Attr3.level2Attr2)
// obj3.attr3.attr3Attr3.level2Attr2 = 500;
// console.log(obj1.attr3.attr3Attr3.level2Attr2)

// Objects
const copy1 = { ...obj1 }
const copy2 = Object.assign({}, obj1);

// Arrays
const array = [1, 3, 4, { nested: true }]
const arrayCopy1 = [...array]
const arrayCopy2 = Object.assign([], array)
const arrayCopy3 = array.slice();

// -----------------------------------------------------------------------------------------

// Deep Copy
// Definition

// A deep copy recursively duplicates every level of nested objects/arrays, so the resulting copy shares zero references with the original — mutating any part of the copy, at any depth, never affects the original.

const original = {
    name: "Sujay",
    address: { city: "Bengaluru" }
};

const deepCopy = structuredClone(original);

deepCopy.address.city = "Mumbai";
console.log(original.address.city);

// -----------------------------------------------------------------------------------------

// Practical Gotchas
// Gotcha 1: Array/object methods that mutate silently
    // Mutating array methods to watch for: .push(), .pop(), .shift(), .unshift(), .splice(), 
    // .sort(), .reverse(), .fill(), .copyWithin(). Non-mutating alternatives: .map(), .filter(), 
    // .slice(), .concat(), [...arr].sort().
// Gotcha 2: Circular references
    // structuredClone or a purpose-built deep-clone library is mandatory
// Gotcha 3: Performance cost of deep copying large structures
// Gotcha 4: Object.assign/spread with getters and setters
    // Spread and Object.assign copy the evaluated value of a getter, not the getter itself
    // If you need to preserve accessor descriptors (getters/setters) during a copy, you need Object.getOwnPropertyDescriptors() combined with 
    // Object.create() or Object.defineProperties() — spread/Object.assign won't preserve them.
// Gotcha 5: Functions can't be cloned by structuredClone
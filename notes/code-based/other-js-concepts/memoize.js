
const memoize = (fn) => {
    let cache = new Map();

    return function (...args) {

        let key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('cache hit: ', key);
            // console.log(cache)
            return cache.get(key)
        }

        const result = fn.apply(this, args);
        cache.set(key, result)
        return result;
    }
}

const squareOf = memoize((n) => {
    for (let i = 0; i < 1e8; i++);
    return n * n;
})

const squareOfClone = memoize((n) => {
    for (let i = 0; i < 1e8; i++);
    return n * n;
})


console.log(squareOf(5))
console.log(squareOf(5))
console.log(squareOfClone(5))
console.log(squareOf(6))
console.log(squareOf(6))
console.log(squareOfClone(6))

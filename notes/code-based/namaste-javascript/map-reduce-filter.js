
//1
// const arr = [3, 6, 9, 11];

// // Double the values [6, 12, 18, 22]

// function double (x) {
//     return 2 * x
// }

// function triple (x) {
//     return 3 * x;
// }

// function binary (x) {
//     return x.toString(2)
// }

// const doubledArray = arr.map(double)
// console.log(arr.map(binary))

//2 
// const arr = [3, 6, 9, 11];

// console.log(arr.filter(item => item%2 !== 0))


//3 Reduce function
// const arr = [3, 9, 10];

// // maximum value in an array

// const max = arr.reduce((acc, item, index, fullArray) => {
//     if (item >= acc)
//         return item;
//     else
//         return acc
// }, 0)

// console.log('max value', max)

// const sum = arr.reduce((acc, item) => acc+item, 0);

// console.log('sum of arr', sum)

//4 
const users = [
    {firstName: 'akshay', lastName: 'saini', age: 26},
    {firstName: 'donald', lastName: 'trump', age: 75},
    {firstName: 'elon', lastName: 'musk', age: 50},
    {firstName: 'deepkia', lastName: 'padukone', age: 26},
]

const output = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc.push(curr.firstName)
        return acc
    } else {
        return acc
    }
}, [])


console.log(output)

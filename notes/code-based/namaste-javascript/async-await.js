

//1
// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('promise resolved value');
//     }, 5000);
// })

// async function handlePromise() {
//     console.log("first line")
//     const result = await promise;
//     console.log("Namaste javascript 1")
//     console.log(result)

//     const result2 = await promise;
//     console.log("Namaste Javascript 2");
//     console.log(result2)
// }

// handlePromise();

// function getData() {
//     promise.then(res => console.log(res))
//     console.log("Namaste javascript")
// }

// getData();

//2

// const p1 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('promise resolved value');
//     }, 5000);
// })

// const p2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         resolve('promise resolved value');
//     }, 5000);
// })

// async function handlePromise() {

//     console.log("first line")

//     const result = await p1;
//     console.log("Namaste javascript 1")
//     console.log(result)

//     const result2 = await p2;
//     console.log("Namaste Javascript 2");
//     console.log(result2)
// }


// handlePromise();

//3

async function handlePromise(params) {

    const url = 'https://api.github.com/users/webmaster18'
    const result = await fetch(url)

    const data = await result.json();

    console.log(data)

}

handlePromise()
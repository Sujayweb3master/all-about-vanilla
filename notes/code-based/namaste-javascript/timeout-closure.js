//1.
// function x() {
//     let i = 1;
//     setTimeout(function(){
//         console.log(i);
//     })
//     console.log('namaste javascript')
//     i = 10;
// }

// x()

//2. 
// function x() {
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, (i*1000))
//     }
//     console.log('Namaste Javascript')
// }
// x()

//3. 
// function x() {
//     for (let i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(i)
//         }, (i*1000))
//     }
//     console.log('Namaste Javascript')
// }
// x()

//4. 
// function x() {
//     var a = 1;
//     for (var i = 1; i <= 5; i++) {
//         setTimeout(function () {
//             console.log(a)
//             a++;
//         }, (i*1000))
//     }
//     console.log('Namaste Javascript')
// }
// x()

//5.
function x () {
    for (var i = 1; i<=5; i++) {
        function closed(i) {
            setTimeout(function () {
                console.log(i)
            }, (i*1000))
        }
        closed(i)
    }
    console.log('Namaste Javascript')
}
x()


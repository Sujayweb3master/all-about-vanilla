
function debounce(fn, delay) {
    let timerId;

    return function (...args) {
        clearTimeout(timerId)
        timerId = setTimeout(() => {
            // fn.apply(this, args)
            fn(args)
        }, delay)
    }
}

const searchKeyword = debounce((query) => {
    console.log(this)
    console.log(query)
}, 300)

document.querySelector('#keyword').addEventListener('input', (eventData) => {
    // console.log(eventData.target.value)
    searchKeyword(eventData.target.value)
})
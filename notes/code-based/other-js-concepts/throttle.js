const throttle = (fn, delay) => {
    let isThrottled = false;

    return function (...args) {

        if (isThrottled) return;

        fn.apply(this, args);
        isThrottled = true;

        setTimeout(() => {
            isThrottled = false
        }, delay)
    }
}


const handleScroll = throttle((data) => {
    // console.log(data)
    console.log('window scroll position:', window.scrollY)
}, 1000)

window.addEventListener('scroll', function (eventData) {
    handleScroll(eventData)
})


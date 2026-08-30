const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

prevButton.addEventListener('click', function () {
    const activeImageElement = document.querySelector('.active')
    nextButton.removeAttribute('disabled')
    if (activeImageElement.previousElementSibling) {
        activeImageElement.classList.remove('active')
        activeImageElement.previousElementSibling.classList.add('active')
    }
    const currentImageElement = document.querySelector('.active')
    if (!currentImageElement.previousElementSibling) {
        prevButton.disabled = true;
    }

})

nextButton.addEventListener('click', function () {
    const activeImageElement = document.querySelector('.active')
    prevButton.removeAttribute('disabled')
    if (activeImageElement.nextElementSibling) {
        activeImageElement.classList.remove('active')
        activeImageElement.nextElementSibling.classList.add('active')
    }
    const currentImageElement = document.querySelector('.active')
    if (!currentImageElement.nextElementSibling) {
        nextButton.disabled = true;
    }
})
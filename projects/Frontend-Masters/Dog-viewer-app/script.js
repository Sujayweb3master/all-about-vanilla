const BASE_IMAGE_URL = 'https://dog.ceo/api/breeds/image/random'

const imageViewSection = document.querySelector('.image-view')
const selectorElement = document.querySelector('.selector')
const spinnerElement = document.querySelector('.spinner')

const handleImageLoaded = () => {
    spinnerElement.classList.add('hide')
    document.querySelector('img').classList.remove('hide')
}

const fetchRandomDogImage = async () => {
    const jsonResponse = await fetch(BASE_IMAGE_URL)
    const finalResponse = await jsonResponse.json();
    return finalResponse
}

const fetchBreedsList = async () => {
    const jsonResponse = await fetch('https://dog.ceo/api/breeds/list/all')
    const finalResponse = await jsonResponse.json();
    return finalResponse
}

const fetchImageByBreed = async (breed) => {
    const jsonResponse = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    const finalResponse = await jsonResponse.json();
    return finalResponse
}

const appendInitialImage = (data) => {
    const imageElement = document.createElement('img')
    imageElement.src = data
    imageElement.addEventListener('load', handleImageLoaded)
    setTimeout(function () {
        imageViewSection.appendChild(imageElement)
    }, 300)
}

const loadOptionsToSelector = (data) => {

    data?.map(breed => {
        const newOption = document.createElement('option')
        newOption.innerText = newOption.value = breed
        selectorElement.appendChild(newOption)
    })
    selectorElement.addEventListener('change', async function (eventData) {
        const imageElement = document.querySelector('img')
        imageElement.classList.add('hide')
        spinnerElement.classList.remove('hide')
        const response = await fetchImageByBreed(eventData.target.value)
        imageElement.src = response.message
        imageElement.addEventListener('load', handleImageLoaded)
    })
}

const initialLoad = async () => {
    const [fetchRandomDogImageResponse, fetchBreedsListResponse] = await Promise.all([fetchRandomDogImage(), fetchBreedsList()])
    appendInitialImage(fetchRandomDogImageResponse.message)
    loadOptionsToSelector(Object.keys(fetchBreedsListResponse.message))
}


function init() {
    initialLoad()
}
init()
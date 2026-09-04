
let progress = 0;
const POINTS_TO_WIN = 10;
let moles = [];

let count = 0;

let holesElementList = document.querySelectorAll('.hole')

const createSingleMole = () => {
    let mole = {
        status: 'gone',
        isKing: Math.floor(Math.random() * 10) === 1,
        updateTime: Date.now() + (2 + (Math.floor(Math.random() * 18)) * 1000)
    }
    moles.push(mole)
}

const createMoles = () => {
    for (let i = 1; i <= 10; i++) {
        createSingleMole()
    }

}

const initialTransition = () => {
    holesElementList.forEach(function (hole) {
        setTimeout(() => {
            hole.querySelector('img').src = "./assets/mole-leaving.png"
            setTimeout(() => {
                hole.querySelector('img').classList.add('gone')

            }, 500)
        }, 500)
    })
    setTimeout(createMoles, 1000)
}

function nextFrame() {

    moles.forEach((mole, index) => {
        if (count === 11) return;
        if (Date.now() > mole.updateTime) {
            switch (mole.status) {
                case 'gone':
                    holesElementList[index].querySelector('img').src = mole.isKing ? './assets/king-mole-hungry.png' : './assets/mole-hungry.png';
                    holesElementList[index].querySelector('img').classList.remove('gone')
                    mole.status = 'hungry'
                    mole.updateTime = Date.now() + 2000;
                    break;
                case 'hungry':
                    holesElementList[index].querySelector('img').src = mole.isKing ? './assets/king-mole-sad.png' : './assets/mole-sad.png'
                    mole.status = 'sad'
                    mole.updateTime = Date.now() + 500;
                    break;
                case 'sad':
                case 'fed':
                    holesElementList[index].querySelector('img').src = mole.isKing ? './assets/king-mole-leaving.png' : './assets/mole-leaving.png'
                    mole.status = 'leaving'
                    mole.updateTime = Date.now() + 500;
                    break;
                case 'leaving':
                    mole.status = 'gone'
                    holesElementList[index].querySelector('img').classList.add('gone')
                    mole.updateTime = Date.now() + (2 + (Math.floor(Math.random() * 18) * 1000));
                    mole.isKing = Math.floor(Math.random() * 10) === 1;
                    break;
                default:
            }
        }

    })
    count++;
    requestAnimationFrame(nextFrame);
}

const attachEventListenerToContainer = () => {
    document.querySelector('.container').addEventListener('click', (eventData) => {
        const imgSrc = eventData.target.src;
        const imgId = eventData.target.id;

        if (!imgSrc || !imgId) return;

        if (imgSrc.includes('mole-hungry')) {
            const currentMole = moles[imgId - 1]
            if (progress === 9 || (progress === 8 && currentMole.isKing)) {
                document.querySelector('.container').classList.add('gone')
                document.querySelector('#win').classList.remove('gone')
                document.body.classList.add('noBackgroundImage')
                document.querySelector('.container').removeEventListener('click', attachEventListenerToContainer)
            }
            currentMole.status = 'fed'
            eventData.target.src = currentMole.isKing ? './assets/king-mole-fed.png' : './assets/mole-fed.png'
            currentMole.updateTime = Date.now() + 500;
            const currentWidth = parseInt(document.querySelector('.progress').style.width);
            if (currentMole.isKing) {
                document.querySelector('.progress').style.width = `${currentWidth + 20}%`
                progress += 2;
            }
            else {
                document.querySelector('.progress').style.width = `${currentWidth + 10}%`
                progress += 1;
            }
        }
    })
}

function init() {
    initialTransition()
    setTimeout(() => {
        nextFrame()
        attachEventListenerToContainer()
    }, 1500)
}

init()
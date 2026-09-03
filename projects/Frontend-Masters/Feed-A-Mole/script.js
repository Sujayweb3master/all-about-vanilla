
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
            console.log(mole.updateTime)
            console.log(Date.now())
            console.log(mole.status)
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
                case 'fed':
                    break;
                case 'sad':
                    holesElementList[index].querySelector('img').src = mole.isKing ? './assets/king-mole-leaving.png' : './assets/mole-leaving.png'
                    mole.status = 'leaving'
                    mole.updateTime = Date.now() + 500;
                    break;
                case 'leaving':
                    // holesElementList[index].querySelector('img').src = './assets/mole-leaving.png'
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

function init() {
    initialTransition()
    setTimeout(nextFrame, 1500)
}

init()
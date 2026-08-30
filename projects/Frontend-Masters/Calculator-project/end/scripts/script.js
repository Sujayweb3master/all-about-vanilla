let screenValue = '0'
let currentOperator;
let accumulator = 0;

const screenElement = document.querySelector('.screen')

const resetCalculator = () => {
    screenValue = '0'
    currentOperator = undefined;
    accumulator = 0;
    screenElement.innerText = 0
}

const handleBackspace = (value) => {
    if (accumulator === value) return
    screenValue = screenElement.innerText = Math.floor(value / 10)
}

const handleOperatorClick = (operator) => {
    accumulator = Number(screenValue)
    currentOperator = operator
    screenElement.innerText = 0
}

const handleDivision = (currentValue) => {
    if (accumulator === 0 && Number(currentValue) === 0) return;
    accumulator = accumulator / Number(currentValue);
}

const handleMultiplication = (currentValue) => {
    accumulator = accumulator * Number(currentValue);
}

const handleAddition = (currentValue) => {
    accumulator = accumulator + Number(currentValue);
}

const handleSubtraction = (currentValue) => {
    accumulator = accumulator - Number(currentValue);
}

const handleCalculation = (operator) => {
    if (operator === '÷') {
        handleDivision(Number(screenValue))
    } else if (operator === '×') {
        handleMultiplication(Number(screenValue))
    } else if (operator === '+') {
        handleAddition(Number(screenValue))
    } else if (operator === '-') {
        handleSubtraction(Number(screenValue))
    }

    screenValue = '0'
    screenElement.innerText = 0
}

const handleEquals = () => {
    if (currentOperator) {
        handleCalculation(currentOperator)
        screenValue = screenElement.innerHTML = accumulator
        currentOperator = undefined;
    } else {
        return
    }
}

const handleBtnClick = (eventData) => {
    let buttonText = eventData.target.innerText;
    let buttonNumber = Number(buttonText);
    let currentScreenValue = Number(screenElement.innerText)

    if (buttonText === 'C') {
        resetCalculator()
        return
    }

    if (buttonText === '←' && currentScreenValue !== 0) {
        handleBackspace(currentScreenValue)
        return
    }
    if (buttonNumber <= 9 && buttonNumber >= 0) {

        if (buttonNumber === 0 && screenValue === '0') return;

        let newNumber = (currentScreenValue * 10) + buttonNumber;
        screenValue = screenElement.innerText = newNumber;
        return
    }

    if (buttonText !== '=') {
        if (currentOperator === undefined) {
            handleOperatorClick(buttonText)
        } else {
            handleCalculation(currentOperator)
            currentOperator = buttonText
        }
        return
    }

    handleEquals()

}

document.querySelector('.calc-buttons').addEventListener('click', handleBtnClick)

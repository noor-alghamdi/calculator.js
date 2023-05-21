let defaultResult = 0
let currentResult = defaultResult


// added func that holds if condition to perform each operation if is met the word (DEVIDE,SUM,SUBTRACT...)didn't do it , not worth it.
function getUserInput(){
    return parseInt(userInput.value)
}

function createWriteOutput(operator, resultBeforeCalc, calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
    outputResult(currentResult, calcDescription)
}


function add() {
    const enteredNumber =  getUserInput()
    const intialResult = currentResult
    currentResult = currentResult + enteredNumber
    createWriteOutput('+', intialResult, enteredNumber)
}
addBtn.addEventListener('click', add)

function subtract(){
    const enteredNumber =  getUserInput()
    const intialResult = currentResult
    currentResult = currentResult - enteredNumber
    createWriteOutput('-', intialResult, enteredNumber)
}
subtractBtn.addEventListener('click', subtract)

function multiply(){
    const enteredNumber =  getUserInput()
    const intialResult = currentResult
    currentResult = currentResult * enteredNumber
    createWriteOutput('*', intialResult, enteredNumber)
}
multiplyBtn.addEventListener('click', multiply)


function devide(){
    const enteredNumber =  getUserInput()
    const intialResult = currentResult
    currentResult = currentResult / enteredNumber
    createWriteOutput('/', intialResult, enteredNumber)
}
divideBtn.addEventListener('click', devide)
let defaultResult = 0
let currentResult = defaultResult

function getUserInput(){
    return parseInt(userInput.value)
}

function add() {
    const enteredNumber =  getUserInput()
    const printOperation = currentResult + '+' + enteredNumber 
    currentResult = currentResult + enteredNumber 
    outputResult(currentResult, printOperation)
}

addBtn.addEventListener('click', add)
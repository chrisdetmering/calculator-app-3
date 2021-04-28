//Global variables
let currentSelection = '';
let currentOperator = '';
let fullOperation = [];
let total = 0;
let firstNumber = 0;

/***************************  Button Functions ****************************/
document.querySelectorAll(".number").forEach(numberButton => { 
    numberButton.addEventListener("click", () => { 
        const number = numberButton.textContent; 
        setNumber(number);
    })
})


function setNumber(number){
    if(number === '.'){
        if(fullOperation[fullOperation.length - 1] === '.') return
        if(currentSelection.includes('.')) return
    }
    if(currentSelection.length === 10) return
    if(currentSelection.length === 0 && number === 0) return

    currentSelection += number;
    fullOperation.push(number);

    updateDisplay();
}

document.querySelector(".clear")
.addEventListener("click", () => { 
    clearDisplay();
})


function clearDisplay(){
    document.getElementById('current-selection').textContent = '0'
    document.getElementById('full-selection').textContent = '';
    resetValues();
}

document.querySelectorAll(".operator").forEach(operatorButton => { 
    operatorButton.addEventListener("click", () => { 
        const operator = operatorButton.textContent; 
        debugger; 
        setOperator(operator)
    })
})

function setOperator(operator){
    if(fullOperation.length === 0 || isNaN(fullOperation.slice(-1))){
        return
    }
    if(currentOperator.length === 0){
        handleFirstOperator(operator)
    } else if (operator === '='){
        handleEquals();
    } else {
        addOperator(operator);
    }
}
/**************************************************************************/

/***********************  Button Operation Functions **********************/


function handleFirstOperator(operator){
    currentOperator = operator;
    firstNumber = currentSelection;
    fullOperation.push(operator);

    updateDisplay()
    currentSelection = '';
}

function handleEquals(){
    updateTotal()
    updateDisplay()
    resetValues()
}

function addOperator(operator){
    updateTotal()

    firstNumber = total;
    fullOperation.push(operator);
    updateDisplay()

    currentSelection = '';
    currentOperator = operator;
}
/**************************************************************************/

/***************************  Helper Functions ****************************/
function updateDisplay(){
    if(currentSelection.length > 10){
        const converted = convertExponent()
        document.getElementById('current-selection').textContent = converted;
    } else {
        document.getElementById('current-selection').textContent = currentSelection;
    }
    document.getElementById('full-selection').textContent = '';
    fullOperation.map((item) => {
        document.getElementById('full-selection').textContent += item
    });
}

function updateTotal(){
    switch(currentOperator){
        case 'x':
            total = parseFloat(firstNumber) * parseFloat(currentSelection);
            break;
        case '/':
            total = parseFloat(firstNumber) / parseFloat(currentSelection);
            break;
        case '+':
            total = parseFloat(firstNumber) + parseFloat(currentSelection);
            break;
        case '-':
            total = parseFloat(firstNumber) - parseFloat(currentSelection);
            break;
    }
    if(total.toString().length > 10){
        currentSelection = total.toFixed(2)
    } else {
        currentSelection = total;
    }
}

function convertExponent(){
    const length = currentSelection.length - 1;
    const num = currentSelection.charAt(0);
    return `${num}e${length}`
}

function resetValues() {
    currentSelection = '';
    fullOperation = [];
    total = 0;
    firstNumber = 0;
    currentOperator = '';
}
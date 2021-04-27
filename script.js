let currentSelection = '';
let currentOperator = '';
let fullOperation = [];
let total = 0;
let firstNumber = 0;


function selectNumber(number){
    currentSelection += number;
    fullOperation.push(number);

    updateDisplay();
}

function updateDisplay(){
    document.getElementById('current-selection').textContent = currentSelection;
    document.getElementById('full-selection').textContent = '';
    fullOperation.map((item) => document.getElementById('full-selection').textContent += item);
}

function clearDisplay(){
    document.getElementById('current-selection').textContent = '0'
    document.getElementById('full-selection').textContent = '';

    resetValues();
}

function addOperator(operator){
    if(fullOperation.length === 0 || isNaN(fullOperation.slice(-1))){
        return
    }
    
    if(currentOperator.length === 0){
        currentOperator = operator;
        firstNumber = currentSelection;
        fullOperation.push(operator);

        updateDisplay()
        currentSelection = '';
    } else if (operator === '='){
        updateTotal()

        currentSelection = total;
        updateDisplay()

        resetValues()
    } else {
        updateTotal()

        currentSelection = total;
        firstNumber = total;
        fullOperation.push(operator);
        updateDisplay()

        currentSelection = '';
        currentOperator = operator;
    }
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
}

function resetValues() {
    currentSelection = '';
    fullOperation = [];
    total = 0;
    firstNumber = 0;
    currentOperator = '';
}
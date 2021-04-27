//Global variables
let currentSelection = '';
let currentOperator = '';
let fullOperation = [];
let total = 0;
let firstNumber = 0;

/***************************  Button Functions ****************************/
function selectNumber(number){
    console.log(fullOperation.slice(-1) === ".")
    currentSelection += number;
    fullOperation.push(number);

    updateDisplay();
}

function clearDisplay(){
    document.getElementById('current-selection').textContent = '0'
    document.getElementById('full-selection').textContent = '';

    resetValues();
}

function selectOperator(operator){
    if(fullOperation.length === 0 || isNaN(fullOperation.slice(-1))){
        return
    }
    if(operator === '%') {
        handlePercent()
    } else if(currentOperator.length === 0){
        handleFirstOperator()
    } else if (operator === '='){
        handleEquals();
    } else {
        addOperator();
    }
}
/**************************************************************************/

/***********************  Button Operation Functions **********************/
function handlePercent(){
    currentSelection = parseFloat(currentSelection) / 100;
    while(!isNaN(fullOperation.slice(-1))){
        fullOperation.pop()
    }
    fullOperation.push(currentSelection);

    updateDisplay();
}

function handleFirstOperator(){
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

function addOperator(){
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
    document.getElementById('current-selection').textContent = currentSelection;
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
    currentSelection = total;
}

function resetValues() {
    currentSelection = '';
    fullOperation = [];
    total = 0;
    firstNumber = 0;
    currentOperator = '';
}
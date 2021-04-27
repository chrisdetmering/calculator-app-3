let currentSelection = '';
let currentOperator = '';
let fullSelection = [];
let total = 0;
let firstNumber = 0;
let secondNumber = 0;


function selectNumber(number){
    currentSelection += number;
    fullSelection.push(number);

    updateDisplay();
}

function updateDisplay(){
    document.getElementById('current-selection').textContent = currentSelection;
    document.getElementById('full-selection').textContent = '';
    fullSelection.map((item) => document.getElementById('full-selection').textContent += item);
}

function clearDisplay(){

    document.getElementById('current-selection').textContent = '0'
    document.getElementById('full-selection').textContent = '';
}

function addOperator(operator){
    document.getElementById('full-selection').textContent += operator;

    if(currentOperator.length === 0){
        currentOperator = operator;
        firstNumber = currentSelection;
        fullSelection.push(operator);
        currentSelection = '';
    } else {
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
        firstNumber = total;
        fullSelection.push(operator);
        updateDisplay()

        currentSelection = '';
        currentOperator = operator;
    }
}
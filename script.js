let currentSelection = '0';
let fullSelection = []

function updateDisplay(number){
    currentSelection = number;
    document.getElementById('current-selection').textContent = number;

    fullSelection.push(number);
    document.getElementById('full-selection').textContent += number;
}

function clearDisplay(){
    currentSelection = '0'
    fullSelection = []

    document.getElementById('current-selection').textContent = '0';
    document.getElementById('full-selection').textContent = '';
}

function addOperator(operator){
    fullSelection.push(operator);
    document.getElementById('full-selection').textContent += operator;
}
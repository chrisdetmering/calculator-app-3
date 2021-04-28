let firstOperand = '';
let secondOperand = '';
let operation = '';

document.querySelectorAll(".number").forEach(numberButton => { 
    numberButton.addEventListener("click", () => { 
        setNumber(numberButton.textContent);
    })
})

function setNumber(number){
  if (!operation) {
      firstOperand += number; 
      setDisplay(firstOperand);
  } else { 
      secondOperand += number; 
      setDisplay(secondOperand);
  }
}

document.querySelector(".clear")
.addEventListener("click", () => { 
    resetCalculator();
})

document.querySelectorAll(".operator").forEach(operatorButton => { 
    operatorButton.addEventListener("click", () => { 
        setOperator(operatorButton.textContent)
    })
})

function setOperator(operator){
    if (firstOperand && !secondOperand) {
        operation = operator;
    }
    
    
    if (secondOperand) {
        //handle continuous operations
    } 
}

document.querySelector('.equals')
.addEventListener("click", () => { 
    handleEquals()
})

function handleEquals(){
    if (secondOperand) {
        const result = calculate(); 
        firstOperand = result; 
        secondOperand = ''; 
        operation = ''; 
        setDisplay(result);
    }
}

function setDisplay(value) {
    const display = document.getElementById("current-selection")
    display.textContent = value; 
}

function calculate(){
    switch(operation){
        case 'x':
            return `${parseFloat(firstOperand) * parseFloat(secondOperand)}`;
        case '/':
            return `${parseFloat(firstOperand) / parseFloat(secondOperand)}`;
        case '+':
            return `${parseFloat(firstOperand) + parseFloat(secondOperand)}`;
        case '-':
            return `${parseFloat(firstOperand) - parseFloat(secondOperand)}`;
    }
}

function resetCalculator() {
    firstOperand = '';
    secondOperand = '';
    operation = '';
    setDisplay('0');
}
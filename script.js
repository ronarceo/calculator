const numberBtns = document.querySelectorAll('[data-number]');
const currentOperationScreen = document.querySelector('#currentOperationScreen');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');
const pointBtn = document.querySelector('#pointBtn');
const operatorBtns = document.querySelectorAll('[data-operator]');
const lastOperationScreen = document.querySelector('#lastOperationScreen');
const equalsBtn = document.querySelector('#equalsBtn');

let firstNumber = '';
let secondNumber = '';
let chosenOperator = null;

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => updateNumber(numberBtn.textContent));
})

function updateNumber(number) {
    if (currentOperationScreen.textContent === '0') {
        currentOperationScreen.textContent = '';
    }
    currentOperationScreen.textContent += number;
}

clearBtn.addEventListener('click', clearScreen);

function clearScreen() {
    currentOperationScreen.textContent = '0';
    lastOperationScreen.textContent = '';
}

deleteBtn.addEventListener('click', deleteNumber);

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0, -1);
}

pointBtn.addEventListener('click', decimal);

function decimal() {
    if (currentOperationScreen.textContent === '') {
        currentOperationScreen.textContent = '0';
    }
    if (currentOperationScreen.textContent.includes('.')) return;
    currentOperationScreen.textContent += '.';
}

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => updateOperator(operatorBtn.textContent));
})

function updateOperator(operator) {
    firstNumber = Number(currentOperationScreen.textContent);
    chosenOperator = operator;
    lastOperationScreen.textContent = `${firstNumber} ${chosenOperator}`;
    currentOperationScreen.textContent = '0';
}

equalsBtn.addEventListener('click', calculate);

function calculate() {
    if (chosenOperator === null) return;
    secondNumber = Number(currentOperationScreen.textContent);
    let result = '';
    switch (chosenOperator) {
        case '+':
            result = firstNumber + secondNumber;
            lastOperationScreen.textContent = `${firstNumber} ${chosenOperator} ${secondNumber} = ${result}`;
            currentOperationScreen.textContent = result;
            break;
        case '−':
            result = firstNumber - secondNumber;
            lastOperationScreen.textContent = `${firstNumber} ${chosenOperator} ${secondNumber} = ${result}`;
            currentOperationScreen.textContent = result;
            break;
        case '×':
            result = firstNumber * secondNumber;
            lastOperationScreen.textContent = `${firstNumber} ${chosenOperator} ${secondNumber} = ${result}`;
            currentOperationScreen.textContent = result;
            break;
        case '÷':
            if (secondNumber === 0) {
                alert('You cannot divide by zero!');
                break;
            }
            result = firstNumber / secondNumber;
            lastOperationScreen.textContent = `${firstNumber} ${chosenOperator} ${secondNumber} = ${result}`;
            currentOperationScreen.textContent = result;
            break;
    }
}
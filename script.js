const numberBtns = document.querySelectorAll('[data-number]');
const currentOperationScreen = document.querySelector('#currentOperationScreen');
const clearBtn = document.querySelector('#clearBtn');
const deleteBtn = document.querySelector('#deleteBtn');

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
}

deleteBtn.addEventListener('click', deleteNumber);

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent.toString().slice(0, -1);
}
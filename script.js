let display = document.getElementById('display');
let currentNumber = '';
let previousNumber = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  display.innerText = currentNumber;
}

function decimalPoint() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    display.innerText = currentNumber;
  }
}

function clearDisplay() {
  currentNumber = '';
  previousNumber = '';
  operator = '';
  display.innerText = 0;
}

function appendOperator(op) {
  if (currentNumber === '') return;
  previousNumber = currentNumber;
  currentNumber = '';
  operator = op;
}

function calculate() {
  if (currentNumber === '' || previousNumber === '') return;
  let result = 0;
  let a = parseFloat(previousNumber);
  let b = parseFloat(currentNumber);

  switch (operator) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      if (b === 0) {
        alert('Error: Division by zero');
        return;
      }
      result = a / b;
      break;
  }

  currentNumber = result.toString();
  previousNumber = '';
  operator = '';
  display.innerText = currentNumber;
}
let history = [];
let memory = null;

const num1 = document.getElementById('num1');
const num2 = document.getElementById('num2');
const resultEl = document.getElementById('result');
const historyList = document.getElementById('historyList');
const clearHistoryBtn = document.getElementById('clearHistory');

function calculate(operator) {
  const val1 = parseFloat(num1.value);
  const val2 = parseFloat(num2.value);

  if (isNaN(val1) || isNaN(val2)) {
    alert('Please enter both numbers.');
    return;
  }

  let result;
  if (operator === '/' && val2 === 0) {
    alert("Cannot divide by zero.");
    return;
  }

  switch (operator) {
    case '+': result = val1 + val2; break;
    case '-': result = val1 - val2; break;
    case '*': result = val1 * val2; break;
    case '/': result = val1 / val2; break;
  }

  const resultString = `${val1} ${operator} ${val2} = ${result}`;
  resultEl.textContent = `Result: ${result}`;

  history.push(resultString);
  updateHistory();
}

function updateHistory() {
  historyList.innerHTML = '';
  history.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    historyList.appendChild(li);
  });
  clearHistoryBtn.disabled = history.length === 0;
}

function clearHistory() {
  history = [];
  updateHistory();
}

function storeMemory() {
  const resText = resultEl.textContent.replace('Result: ', '');
  const value = parseFloat(resText);
  if (!isNaN(value)) memory = value;
}

function recallMemory() {
  if (memory !== null) num1.value = memory;
}

function clearMemory() {
  memory = null;
  alert('Memory cleared.');
}

function toggleButtons() {
  const enabled = num1.value !== '' && num2.value !== '';
  document.querySelectorAll('.buttons button').forEach(btn => btn.disabled = !enabled);
}

num1.addEventListener('input', toggleButtons);
num2.addEventListener('input', toggleButtons);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') calculate('+');
  if (['+', '-', '*', '/'].includes(e.key)) calculate(e.key);
});

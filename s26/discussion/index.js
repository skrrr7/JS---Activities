// DOM

// mini activity
// Create and add text to the page
const textElement = document.createElement('p');
textElement.id = 'text';
textElement.textContent = 'gegegegge';
document.body.appendChild(textElement);

// Create and add "Change to Blue" button
const blueButton = document.createElement('button');
blueButton.id = 'blueButton';
blueButton.textContent = 'Change to Blue';
document.body.appendChild(blueButton);

// Create and add "Change to Green" button
const greenButton = document.createElement('button');
greenButton.id = 'greenButton';
greenButton.textContent = 'Change to Green';
document.body.appendChild(greenButton);

// Attach click events to buttons
blueButton.addEventListener('click', () => {
    textElement.style.color = 'blue';
});

greenButton.addEventListener('click', () => {
    textElement.style.color = 'green';
});

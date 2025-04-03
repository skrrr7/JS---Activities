const txtFirstname = document.querySelector('#txt-first-name');
const txtLastname = document.querySelector('#txt-last-name');
const spanFullname = document.querySelector('#span-full-name');



// Event listener
txtFirstname.addEventListener('keyup', (event) =>{
    spanFullname.innerHTML = txtFirstname.value;
})

txtFirstname.addEventListener('keyup', (event) =>{
    console.log(event.target);
    console.log(event.target.value);
})

//mini activity
document.addEventListener('DOMContentLoaded', () => {
    const txtMessage = document.querySelector('#txt-message');
    const charCounter = document.querySelector('#char-counter');
    const maxLength = 100;

    function updateCharacterCount() {
        let text = txtMessage.value;
        if (text.length > maxLength) {
            txtMessage.value = text.slice(0, maxLength);
        }
        let charCount = txtMessage.value.length;

        if (charCount === maxLength) {
            charCounter.innerHTML = `Characters: ${charCount} / ${maxLength} (Character limit reached!)`;
            charCounter.style.color = 'red';
        } else {
            charCounter.innerHTML = `Characters: ${charCount} / ${maxLength}`;
            charCounter.style.color = 'black';
        }
    }

    txtMessage.addEventListener('input', updateCharacterCount);
});

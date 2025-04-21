// Form validation and API submission
const registerForm = document.getElementById('registerForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Event listeners for validation feedback
email.addEventListener('input', () => {
    if (!email.value.includes('@')) {
        emailError.style.display = 'block';
    } else {
        emailError.style.display = 'none';
    }
});

password.addEventListener('input', () => {
    if (password.value.length < 8) {
        passwordError.style.display = 'block';
    } else {
        passwordError.style.display = 'none';
    }
});

confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value !== password.value) {
        confirmPasswordError.style.display = 'block';
    } else {
        confirmPasswordError.style.display = 'none';
    }
});

// Submit form and send data to API
registerForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Check if all validations pass
    if (!email.value.includes('@') || password.value.length < 8 || confirmPassword.value !== password.value) {
        alert('Please correct the errors before submitting.');
        return;
    }

    const data = {
        email: email.value,
        password: password.value,
    };

    try {
        const response = await fetch('https://movieapp-api-lms1.onrender.com/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.message === 'Registered Successfully') {
            console.log(result);
            alert('Registration successful!');
        } else {
            alert('Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    }
});

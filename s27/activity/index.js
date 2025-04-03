document.addEventListener("DOMContentLoaded", function () {
    function updatePreview() {
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const mobile = document.getElementById('mobile').value.trim();
        
        // Live update full name (concatenation of first name and last name)
        document.getElementById('fullName').textContent = `${firstName} ${lastName}`.trim();

        // Live update email preview
        document.getElementById('emailPreview').textContent = email;

        const mobilePreview = document.getElementById('mobilePreview');
        const mobileError = document.getElementById('mobileError');
        const introMessage = document.getElementById('introMessage');

        // Mobile validation
        if (mobile.match(/^0\d{10}$/)) {
            mobilePreview.textContent = mobile;
            mobileError.textContent = "";
        } else if (mobile) {
            mobilePreview.textContent = "";
            mobileError.textContent = "Invalid mobile number!";
        } else {
            mobilePreview.textContent = "";
            mobileError.textContent = "";
        }

        // Show or hide introduction message
        if (firstName && lastName && mobile.match(/^0\d{10}$/)) {
            introMessage.textContent = `Hello, I am ${firstName} ${lastName}, you can contact me on this number ${mobile}.`;
            introMessage.style.display = "block";
        } else {
            introMessage.style.display = "none";
        }
    }

    // Attach event listeners to update preview in real-time
    document.getElementById('firstName').addEventListener('input', updatePreview);
    document.getElementById('lastName').addEventListener('input', updatePreview);
    document.getElementById('email').addEventListener('input', updatePreview);
    document.getElementById('mobile').addEventListener('input', updatePreview);
});

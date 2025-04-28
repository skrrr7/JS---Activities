document.addEventListener("DOMContentLoaded", () => {
    function validateInput(input, errorElement, condition, message) {
        if (condition) {
            errorElement.style.display = "block";
            input.classList.add("invalid");
            errorElement.textContent = message;
            return false;
        } else {
            errorElement.style.display = "none";
            input.classList.remove("invalid");
            return true;
        }
    }

    // Registration Form Logic
    const registerForm = document.getElementById("registerForm");
    if (registerForm) {
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");
        const emailError = document.getElementById("emailError");
        const passwordError = document.getElementById("passwordError");
        const confirmPasswordError = document.getElementById("confirmPasswordError");

        email.addEventListener("input", () => validateInput(email, emailError, !email.value.includes("@"), "Enter a valid email address."));
        password.addEventListener("input", () => validateInput(password, passwordError, password.value.length < 8, "Password must be at least 8 characters."));
        confirmPassword.addEventListener("input", () => validateInput(confirmPassword, confirmPasswordError, confirmPassword.value !== password.value, "Passwords must match."));

        registerForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (![email, password, confirmPassword].every(input => validateInput(input, document.getElementById(input.id + "Error"), input.value === "", "Field cannot be empty"))) {
                return;
            }

            try {
                const response = await fetch("https://movieapp-api-lms1.onrender.com/users/register", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: email.value, password: password.value })
                });

                const result = await response.json();

                if (response.ok && result.message === "Registered Successfully") {
                    alert("Registration Successful!");
                    window.location.href = "login.html";
                } else {
                    alert(`Registration Failed: ${result.message}`);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An unexpected error occurred. Please try again later.");
            }
        });
    }

    // Login Form Logic
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        const loginEmail = document.getElementById("loginEmail");
        const loginPassword = document.getElementById("loginPassword");

        loginForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (![loginEmail, loginPassword].every(input => validateInput(input, document.getElementById(input.id + "Error"), input.value === "", "Field cannot be empty"))) {
                return;
            }

            try {
                const response = await fetch("https://movieapp-api-lms1.onrender.com/users/login", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: loginEmail.value, password: loginPassword.value })
                });

                const result = await response.json();

                if (response.ok && result.access) {
                    localStorage.setItem("authToken", result.access);
                    alert("Login Successful!");
                    window.location.href = "movies.html";
                } else {
                    alert(`Login Failed: ${result.message}`);
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An unexpected error occurred. Please try again later.");
            }
        });
    }

    // Fixed Movie Library Logic
    const moviesGrid = document.getElementById("moviesGrid");

    if (!moviesGrid) {
        console.error("Error: moviesGrid container not found.");
        return;
    }

    fetch("https://movieapp-api-lms1.onrender.com/movies/getMovies")
    .then(response => response.json())
    .then(data => {
        console.log("Fetched Data:", data); // Debug log
        
        if (!data || !Array.isArray(data.movies)) {
            throw new Error("Unexpected API response format");
        }

        const movies = data.movies; // Adjust based on API structure

        if (movies.length === 0) {
            moviesGrid.innerHTML = "<p>No movies found.</p>";
            return;
        }

        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");
            movieCard.innerHTML = `
                <img src="clapperboard-icon.png" alt="Movie Icon">
                <h4>${movie.title}</h4>
                <p>${movie.genre}</p>
            `;
            moviesGrid.appendChild(movieCard);
        });
    })
    .catch(error => {
        console.error("Error fetching movies:", error);
        moviesGrid.innerHTML = `<p>Failed to load movies: ${error.message}</p>`;
    });

});

const form = document.getElementById("registerForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");

const userError = document.getElementById("userError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
});

function validateForm() {
    let isValid = true;

    userError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    successMsg.textContent = "";

    if (username.value.trim() === "") {
        userError.textContent = "Username cannot be empty";
        isValid = false;
    }

    if (!email.value.includes("@")) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    }

    if (password.value.length < 6) {
        passError.textContent = "Minimum 6 characters required";
        isValid = false;
    }

    if (isValid) {
        successMsg.textContent = "Registration successful";
        form.reset();
    }
}

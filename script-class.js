class FormValidator {
    constructor(formId) {
        this.form = document.getElementById(formId);
        this.name = document.getElementById("name");
        this.email = document.getElementById("email");
        this.password = document.getElementById("password");

        this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    }

    showError(input, message) {
        const errorElement = document.getElementById(input.id + "Error");
        errorElement.textContent = message;
    }

    clearError(input) {
        const errorElement = document.getElementById(input.id + "Error");
        errorElement.textContent = "";
    }

    validateName() {
        if (this.name.value.trim() === "") {
            this.showError(this.name, "Name is required");
            return false;
        }
        this.clearError(this.name);
        return true;
    }

    validateEmail() {
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(this.email.value.trim())) {
            this.showError(this.email, "Enter a valid email");
            return false;
        }
        this.clearError(this.email);
        return true;
    }

    validatePassword() {
        if (this.password.value.length < 6) {
            this.showError(this.password, "Password must be at least 6 characters");
            return false;
        }
        this.clearError(this.password);
        return true;
    }

    validateForm() {
        return (
            this.validateName() &&
            this.validateEmail() &&
            this.validatePassword()
        );
    }

    handleSubmit(e) {
        e.preventDefault();
        const successMessage = document.getElementById("successMessage");

        if (this.validateForm()) {
            successMessage.textContent = "Registration Successful!";
            this.form.reset();
        } else {
            successMessage.textContent = "";
        }
    }
}

// Create Object (OOP approach)
const validator = new FormValidator("registrationForm");

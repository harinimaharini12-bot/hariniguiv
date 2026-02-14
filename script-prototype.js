// Constructor Function
function FormValidator(formId) {
    this.form = document.getElementById(formId);
    this.name = document.getElementById("name");
    this.email = document.getElementById("email");
    this.password = document.getElementById("password");
}

// Prototype: Show Error
FormValidator.prototype.showError = function (input, message) {
    const errorElement = document.getElementById(input.id + "Error");
    errorElement.textContent = message;
};

// Prototype: Clear Error
FormValidator.prototype.clearError = function (input) {
    const errorElement = document.getElementById(input.id + "Error");
    errorElement.textContent = "";
};

// Prototype: Validate Name
FormValidator.prototype.validateName = function () {
    if (this.name.value.trim() === "") {
        this.showError(this.name, "Name is required");
        return false;
    }
    this.clearError(this.name);
    return true;
};

// Prototype: Validate Email
FormValidator.prototype.validateEmail = function () {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(this.email.value.trim())) {
        this.showError(this.email, "Enter a valid email");
        return false;
    }
    this.clearError(this.email);
    return true;
};

// Prototype: Validate Password
FormValidator.prototype.validatePassword = function () {
    if (this.password.value.length < 6) {
        this.showError(this.password, "Password must be at least 6 characters");
        return false;
    }
    this.clearError(this.password);
    return true;
};

// Prototype: Validate Form
FormValidator.prototype.validateForm = function () {
    const isNameValid = this.validateName();
    const isEmailValid = this.validateEmail();
    const isPasswordValid = this.validatePassword();

    return isNameValid && isEmailValid && isPasswordValid;
};

// Initialize Validator
const validator = new FormValidator("registrationForm");

validator.form.addEventListener("submit", function (e) {
    e.preventDefault();
    const successMessage = document.getElementById("successMessage");

    if (validator.validateForm()) {
        successMessage.textContent = "Registration Successful!";
        validator.form.reset();
    } else {
        successMessage.textContent = "";
    }
});

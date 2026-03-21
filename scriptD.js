const signupForm = document.getElementById("signupForm")
const loginForm = document.getElementById("loginForm")

if (signupForm) {
    const signupUsername = document.getElementById("username")
    const signupEmail = document.getElementById("email")
    const signupPhone = document.getElementById("phone")
    const signupDob = document.getElementById("dob")
    const signupPassword = document.getElementById("password")
    const signupConfirmPassword = document.getElementById("confirmPassword")

    const signupUsernameError = document.getElementById("usernameError")
    const signupEmailError = document.getElementById("emailError")
    const signupPhoneError = document.getElementById("phoneError")
    const signupDobError = document.getElementById("dobError")
    const signupPasswordError = document.getElementById("passwordError")
    const signupConfirmPasswordError = document.getElementById("confirmPasswordError")

    const signupFormError = document.getElementById("formError")
    const signupFormSuccess = document.getElementById("formSuccess")

    const signupTogglePassword = document.getElementById("togglePassword")
    const signupToggleConfirmPassword = document.getElementById("toggleConfirmPassword")

    function clearSignupMessages() {
        signupUsernameError.textContent = ""
        signupEmailError.textContent = ""
        signupPhoneError.textContent = ""
        signupDobError.textContent = ""
        signupPasswordError.textContent = ""
        signupConfirmPasswordError.textContent = ""
        signupFormError.textContent = ""
        signupFormSuccess.textContent = ""
        signupFormError.style.display = "none"
        signupFormSuccess.style.display = "none"
    }

    function showSignupFormError(message) {
        signupFormError.textContent = message
        signupFormError.style.display = "block"
        signupFormSuccess.style.display = "none"
    }

    function showSignupFormSuccess(message) {
        signupFormSuccess.textContent = message
        signupFormSuccess.style.display = "block"
        signupFormError.style.display = "none"
    }

    function getAge(dateString) {
        const birthDate = new Date(dateString)
        const today = new Date()
        let age = today.getFullYear() - birthDate.getFullYear()
        const monthDifference = today.getMonth() - birthDate.getMonth()

        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }

        return age
    }

    signupForm.addEventListener("submit", function (e) {
        e.preventDefault()
        clearSignupMessages()

        let isValid = true

        if (signupUsername.value.trim() === "") {
            signupUsernameError.textContent = "Username is required"
            isValid = false
        }

        if (signupEmail.value.trim() === "") {
            signupEmailError.textContent = "Email is required"
            isValid = false
        }

        if (signupPhone.value.trim() === "") {
            signupPhoneError.textContent = "Phone number is required"
            isValid = false
        }

        if (signupDob.value === "") {
            signupDobError.textContent = "Date of birth is required"
            isValid = false
        } else if (getAge(signupDob.value) < 18) {
            signupDobError.textContent = "You must be at least 18 years old"
            isValid = false
        }

        if (signupPassword.value === "") {
            signupPasswordError.textContent = "Password is required"
            isValid = false
        } else {
            const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/
            if (!passwordRegex.test(signupPassword.value)) {
                signupPasswordError.textContent = "Password must be at least 8 characters long and include an uppercase letter, a number, and a special character"
                isValid = false
            }
        }

        if (signupConfirmPassword.value === "") {
            signupConfirmPasswordError.textContent = "Confirm password is required"
            isValid = false
        } else if (signupPassword.value !== signupConfirmPassword.value) {
            signupConfirmPasswordError.textContent = "Passwords do not match"
            isValid = false
        }

        if (!isValid) {
            showSignupFormError("Please fix the errors below")
            return
        }

        showSignupFormSuccess("Account created successfully!")
        signupForm.reset()
    })

    if (signupTogglePassword) {
        signupTogglePassword.addEventListener("click", function () {
            if (signupPassword.type === "password") {
                signupPassword.type = "text"
                this.classList.remove("fa-eye")
                this.classList.add("fa-eye-slash")
            } else {
                signupPassword.type = "password"
                this.classList.remove("fa-eye-slash")
                this.classList.add("fa-eye")
            }
        })
    }

    if (signupToggleConfirmPassword) {
        signupToggleConfirmPassword.addEventListener("click", function () {
            if (signupConfirmPassword.type === "password") {
                signupConfirmPassword.type = "text"
                this.classList.remove("fa-eye")
                this.classList.add("fa-eye-slash")
            } else {
                signupConfirmPassword.type = "password"
                this.classList.remove("fa-eye-slash")
                this.classList.add("fa-eye")
            }
        })
    }
}

if (loginForm) {
    const loginUsername = document.getElementById("loginUsername")
    const loginPassword = document.getElementById("loginPassword")

    const loginUsernameError = document.getElementById("loginUsernameError")
    const loginPasswordError = document.getElementById("loginPasswordError")
    const loginError = document.getElementById("loginError")

    const loginTogglePassword = document.getElementById("loginTogglePassword")

    function clearLoginErrors() {
        loginUsernameError.textContent = ""
        loginPasswordError.textContent = ""
        loginError.textContent = ""
        loginError.style.display = "none"
    }

    function showLoginError(message) {
        loginError.textContent = message
        loginError.style.display = "block"
    }

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault()
        clearLoginErrors()

        let valid = true

        if (loginUsername.value.trim() === "") {
            loginUsernameError.textContent = "Username is required"
            valid = false
        }

        if (loginPassword.value.trim() === "") {
            loginPasswordError.textContent = "Password is required"
            valid = false
        }

        if (!valid) {
            showLoginError("Please fill in all required fields")
            return
        }

        showLoginError("Invalid username or password")
    })

    if (loginTogglePassword) {
        loginTogglePassword.addEventListener("click", function () {
            if (loginPassword.type === "password") {
                loginPassword.type = "text"
                this.classList.remove("fa-eye")
                this.classList.add("fa-eye-slash")
            } else {
                loginPassword.type = "password"
                this.classList.remove("fa-eye-slash")
                this.classList.add("fa-eye")
            }
        })
    }
}
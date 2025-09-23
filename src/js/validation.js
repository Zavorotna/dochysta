const form = document.querySelector("form[action='sendorder.php']"),
    phoneInput = form.querySelector("input[name='userPhone']"),
    nameInput = form.querySelector("input[name='userName']"),
    nameSurInput = form.querySelector("input[name='userSurName']"),
    emailInputs = form.querySelectorAll("input[name='email']"),

    errorTel = document.querySelector(".error_tel"),
    errorEmail = document.querySelector(".error"),
    errorName = document.querySelector(".errorName"),
    errorSurName = document.querySelector(".errorSurName"),

    maxLength = 50,
    minLength = 3


phoneInput.addEventListener("focus", function () {
    if (!phoneInput.value.startsWith("+380")) {
        phoneInput.value = "+380"
    }
})

phoneInput.addEventListener("input", function () {
    let cleanedValue = phoneInput.value.replace(/[^\d+]/g, "")

    if (!cleanedValue.startsWith("+380")) {
        cleanedValue = "+380" + cleanedValue.slice(3)
    }

    if (cleanedValue.length > 13) {
        cleanedValue = cleanedValue.slice(0, 13)
    }

    phoneInput.value = cleanedValue

    if (isValidPhoneNumber(cleanedValue)) {
        phoneInput.style.borderColor = "green"
        phoneInput.style.color = "#121212"
        errorTel.style.display = "none"
    } else {
        phoneInput.style.borderColor = "#EB4242"
        phoneInput.style.color = "#EB4242"
        errorTel.style.display = "block"
    }
})

const emailPattern = /^[a-zA-Z][a-zA-Z0-9._-]+[a-zA-Z0-9]@([a-z_-]+(\.\w+)?(\.\w{2,3}))$/

emailInputs.forEach(input => {
    input.addEventListener("input", () => {
        const emailValue = input.value.trim()
        if (!emailPattern.test(emailValue)) {
            input.style.borderColor = "#EB4242"
            input.style.color = "#EB4242"
            errorEmail.style.display = "block"
        } else {
            input.style.borderColor = "green"
            input.style.color = "#121212"
            errorEmail.style.display = "none"
        }
    })
})

form.addEventListener("submit", (e) => {
    let valid = true

    const phone = phoneInput.value.trim(),
        name = nameInput.value.trim(),
        surname = nameSurInput.value.trim()

    // Phone
    if (!phone || !isValidPhoneNumber(phone)) {
        errorTel.style.display = "block"
        phoneInput.style.borderColor = "#EB4242"
        valid = false
    }

    // Name
    if (name.length < minLength || name.length > maxLength) {
        errorName.style.display = "block"
        nameInput.style.borderColor = "#EB4242"
        valid = false
    } else {
        errorName.style.display = "none"
        nameInput.style.borderColor = "green"
    }

    // Surname
    if (surname.length < minLength || surname.length > maxLength) {
        errorSurName.style.display = "block"
        nameSurInput.style.borderColor = "#EB4242"
        valid = false
    } else {
        errorSurName.style.display = "none"
        nameSurInput.style.borderColor = "green"
    }

    // Emails
    emailInputs.forEach(input => {
        const emailValue = input.value.trim()
        if (!emailPattern.test(emailValue)) {
            input.style.borderColor = "#EB4242"
            input.style.color = "#EB4242"
            errorEmail.style.display = "block"
            valid = false
        }
    })

    if (!valid) {
        e.preventDefault()
    }
})


function isValidPhoneNumber(phoneNumber) {
    return /^\+380\d{9}$/.test(phoneNumber)
}

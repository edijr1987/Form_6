let form = document.getElementById('form')
let username = document.getElementById('username')
let email = document.getElementById('email')
let password = document.getElementById('password')
let password2 = document.getElementById('password2')
let address = document.getElementById('address')
let name = document.getElementById('name')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    checkInputs()
})

function checkInputs() {
    // get the values from the inputs

    let usernameValue = username.value.trim()
    let emailValue = email.value.trim()
    let passwordValue = password.value.trim()
    let password2Value = password2.value.trim()
    let addressValue = address.value.trim()
    let nameValue = name.value.trim()

    if(usernameValue === '') {
        // show error
        // add error class
        setErrorFor(username, 'Username cannot be blank')
    } else if (usernameValue.length <= 3) {
        setErrorFor(username, 'Min of 4 characters')
    } else {
        setSuccessFor(username)
    }

    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank')
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid')
    } else {
        setSuccessFor(email)
    }

    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank')
    } else if (passwordValue.length < 5) {
        setErrorFor(password, 'Password must have 5 caracterers ')
    } else {
        setSuccessFor(password)
    }

    if(password2Value === '') {
        setErrorFor(password2, 'Password cannot be blank')
    } else if(passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords are different')
    } else {
        setSuccessFor(password2)
    }

    if(addressValue === '') {
        setErrorFor(address, 'Address cannot be blank') 
    } else {
        setSuccessFor(address)
    }

    if(nameValue === '') {
        setErrorFor(name, 'Name cannot be blank')
    } else if(nameValue.length < 4) {
        setErrorFor(name, 'Name must contain 4 characters')
    } else {
        setSuccessFor(name)
    }
}

function setErrorFor(input, messsage) {
    let formControl = input.parentElement     // .form-control
    let small = formControl.querySelector('small')

    // add error message inside small
    small.innerText = messsage

    // add error class
    formControl.className = 'form-control error'
}

function setSuccessFor(input) {
    let formControl = input.parentElement
    formControl.className = 'form-control success'
}

function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

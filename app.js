const validationForm = document.querySelector('#validationForm');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repeatPassword = document.querySelector('#repeatPassword');
const errorMessage = document.querySelector('#errorMessage');
const submit = document.querySelector('#submit');




const setError = () => {
    errorMessage.classList.remove('d-none');
    return false;
}
const setSuccess = () => {
    errorMessage.classList.add('d-none');
    return true;
}

const isValidEmail = email => {
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
    return regEx.test(String(email).toLowerCase());
}

const validateFirstName = () => {
    const firstNameValue = firstName.value.trim();


    if(firstNameValue === '' || firstNameValue.length < 2) {
        console.log('Ange ett förnamn')
        return setError();
    }
     else {
        return setSuccess();
    }

}

const validateLastName = () => {
    const lastNameValue = lastName.value.trim();

    if(lastNameValue === '' || lastNameValue.length < 2) {
        console.log('Ange ett korrekt efternamn')
        return setError();
    } else {
        return setSuccess();
    }
};

const validateEmail = () => {
    const emailValue = email.value.trim();

    if(emailValue === "") {
        console.log('Ange en giltig emailadress')
        return setError();
    } else if(!isValidEmail(emailValue)) {
        console.log('Ange en giltig emailadress')
        return setError();
    } else {
        return setSuccess();
    }
}


const validatePasswords = () => {
    const passwordValue = password.value.trim();
    const repeatPasswordValue = repeatPassword.value.trim();

    if(passwordValue === "" || passwordValue.length < 6) {
        console.log('Lösenordet måste innehålla minst 6 tecken')
        return setError();
    } else if (repeatPasswordValue !== passwordValue) {
        console.log('Lösenorden måste vara likadana')
        return setError();
    }else {
        return setSuccess();
    }

    
}

const validateTerms = () => {
    const terms = document.querySelector('#terms');

    if(!terms.checked) {
        console.log('Du måste fylla i checkrutan!')
        return setError();

    }
    else {
        return setSuccess();
    }
}



validationForm.addEventListener('submit', (e) => {
    
    e.preventDefault();
    validateFirstName();
    validateLastName();
    validateEmail();
    validatePasswords();
    validateTerms();
    validateForm();


function validateForm() {
    if(validateFirstName() == true &&
    validateLastName() == true &&
    validateEmail() == true &&
    validatePasswords() == true && 
    validateTerms() ) {
        console.log('Du har fyllt i alla uppgifter korrekt!')
        return setSuccess();
    } else {
        return setError();
    }

}

const user = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
}
console.log(user)

});












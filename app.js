const validationForm = document.querySelector('#validationForm'); // Hämta formuläret
const firstName = document.querySelector('#firstName');           // Hämta inputrutan till first name
const lastName = document.querySelector('#lastName');             // Hämta inputrutan till last name
const email = document.querySelector('#email');                   // Hämta inputrutan till email
const password = document.querySelector('#password');             // Hämta inputrutan till password
const repeatPassword = document.querySelector('#repeatPassword'); // Hämta inputrutan till repeat password
const errorMessage = document.querySelector('#errorMessage');     // Hämta diven till error message
const submit = document.querySelector('#submit');                 // Hämta submit-knappten




const setError = () => {    // Deklarera error funktionen
    errorMessage.classList.remove('d-none');    // Tar bort klassen "d-none" så att diven visas i hemsidan om något blir fel
    return false;
}
const setSuccess = () => {   // Deklarerar success funktionen
    errorMessage.classList.add('d-none');    // Här adderar vi istället klassen "d-none" för att få bort error-texten
    return true;
}



const isValidEmail = email => {  // Deklarerar isValidEmail
    const regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;       // Regular expression som bestämmer hur en giltig emailadress måste se ut
    return regEx.test(email.toLowerCase());     // Returnerar regEx och omvandlar den till endast gemener.
}

const isValidName = name => { 
    const regExText = /^[a-öA-Ö\s\-]*$/; 
    return regExText.test(name);
}


const validateFirstName = () => {     // Deklarerar funtion till förnamet
    const firstNameValue = firstName.value.trim();     // Bestämmer att firstNameValue tar emot value och tar bort eventuella mellanslag ur namnet

    if(firstNameValue === '' || firstNameValue.length < 2) {      // "Om firstNameValue är en tom string ELLER mindre än två bokstäver"
        console.log('Ange ett förnamn')  
        return setError();      // Vi använder setError funktionen för att berätta för användaren att någonting har gått fel i formuläret vid firstName
    } else if(!isValidName(firstNameValue)) {
        console.log('Ange ett namn utan nummer');
        return setError(); 
    }
    else {
        return setSuccess();        // Om kraven är uppfyllda -> inget felmeddelande visas
    }
}



const validateLastName = () => {        // Deklrarera lastName-funktionen. I denna gör vi samma sak som i firstName-funktionen.
    const lastNameValue = lastName.value.trim();

    if(lastNameValue === '' || lastNameValue.length < 2) {
        console.log('Ange ett korrekt efternamn')
        return setError();
    }  else if(!isValidName(lastNameValue)) {
        console.log('Namnet får inte innehålla några siffror')
        return setError(); 
    }else {
        return setSuccess();
    }
};



const validateEmail = () => {        // Deklarera email-funktionen
    const emailValue = email.value.trim();      // Deklarerar emailValue för att ta emot value från email och ta bort eventuella mellanslag.

    if(emailValue === "") {      // Om emailValue är en tom string så returnerar vi setError funktionen som visar att någonting gått snett i emailrutan
        console.log('Ange en emailadress')
        return setError();
    } else if(!isValidEmail(emailValue)) {      // Om emailadressen inte överrensstämmer med isValidEmail-funktionen så returnerar vi också ett felmeddelande
        console.log('Ange en giltig emailadress')
        return setError();
    } else {
        return setSuccess();        // Om allting gått bra visas inget felmeddelande med hjälp av att dölja d-none klassen igen. 
    }
}



const validatePasswords = () => {       // Deklrarerar en funktion som tar in båda passwordfälten
    const passwordValue = password.value.trim();
    const repeatPasswordValue = repeatPassword.value.trim();

    if(passwordValue === "" || passwordValue.length < 6) {      // Password får inte vara en tom string eller mindre än 6 tecken
        console.log('Lösenordet måste innehålla minst 6 tecken')
        return setError();          // returnerar setError funktionen för att visa felmeddelandet
    } else if (repeatPasswordValue !== passwordValue) {      // Om båda lösenorden inte är likadana returnerar vi också setError
        console.log('Lösenorden måste vara likadana')
        return setError();
    }else {         // Uppfylls kraven visas inget felmeddelande med hjälp av setSuccess
        return setSuccess();
    }
}



const validateTerms = () => {        // Deklarerar checkbox funktionen
    const terms = document.querySelector('#terms');         // Hämtar checkrutan från HTML

    if(!terms.checked) {        // Om checkrutan INTE är ifylld returnerar vi ett felmeddelande med setError.
        console.log('Du måste fylla i checkrutan!')
        return setError();
    }
    else {      // Fyller vi i checkrutan tar vi bort felmeddelandet med setSuccess
        return setSuccess();
    }
}





validationForm.addEventListener('submit', (e) => {          // Skapar en eventlistener som lyssnar efter submit, då vi klickar på validate-knappen.
    
    e.preventDefault();     // När vi trycker på validate kommer sidan inte att laddas om.
//    validateFirstName();        // Hämtar och kallar på alla funktioner vi skapat
//     validateLastName();         //
//     validateEmail();            //
//     validatePasswords();        //
//     validateTerms();            //
    // validateForm();             //


// function validateForm() {                   // Skapar en funktion på hela formuläret som kollar ifall alla funkctioner vi skapat returnerar True ->
    if(validateFirstName() == true &&       // och returnerar därefter setSuccess eller setError ifall allting är korrekt ifyllt eller inte.
    validateLastName() == true &&
    validateEmail() == true &&
    validatePasswords() == true && 
    validateTerms() ) {
        console.log('Du har fyllt i alla uppgifter korrekt!')       // Om allting stämmer och är korrekt skrivs ett meddelande ut i konsolen.
        
        const user = {      // Skapar ett user-object som tar in de värden användaren skriver in i fälten.
            firstName: firstName.value,
            lastName: lastName.value,
            email: email.value,
            password: password.value,
        }
        
        console.log(user)       // Loggar objektet till konsolen. 
        return setSuccess();
    } else {
        return setError();
    }

// }

});












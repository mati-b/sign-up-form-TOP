const passw = document.querySelector('#password');
const passwConfirm = document.querySelector('#password-confirm');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const phone = document.querySelector('#phone');

const submitBtn = document.querySelector('.submit-btn');

//errors
const passErr = document.querySelector('#password-error');
const passErrConf = document.querySelector('#password-confirm-error');
const firstNameError = document.querySelector('#first-name-error');
const lastNameError = document.querySelector('#last-name-error');
const emailError = document.querySelector('#email-error');
const phoneError = document.querySelector('#phone-error');


firstName.addEventListener("input", (e) => {
    if (firstName.value === '') {
      firstNameError.textContent = 'Please type in your first name.';
    } else {
      firstNameError.textContent = '';
    }
});

lastName.addEventListener("input", (e) => {
    if (lastName.value === '') {
      lastNameError.textContent = 'Please type in your last name.';
    } else {
      lastNameError.textContent = '';
    }
}); 


email.addEventListener("input",  (e) => {
    if (email.validity.typeMismatch) {
      emailError.textContent = 'Please enter in a valid Email. ex(johnSmith@email.com)';
    } else {
      emailError.textContent = '';
    }
}); 

phone.addEventListener("input", (e) => {
    if (phone.validity.patternMismatch) {
        phoneError.textContent = "Please enter in a 10 digit phone numer";
    } else {
        phoneError.textContent= '';
    }
});

passw.addEventListener("input", (e) => {
    if (passw.validity.typeMismatch) {
        const currentValue = passw.value;
        const regExpCap = /[A-Z]/g;
        const regExpDig = /[0-9]/g;

        let result = '';
        if (regExpCap.test(currentValue)) {
            result += '';
        } else {
            result += `Missing at least 1 capital letter. `;
            result += '\n';
        }

        if (regExpDig.test(currentValue)) {
            result += '';
        } else {
            result += 'Missing at least 1 number.';
            result += '\n';
        }
    
        if (currentValue.length < 9) {
            result += 'Password must be at least 8 characters.';
            result += '\n';
        } else {
            result += '';
        }

    } else {
        passErr.textContent = '';
    }

});

passwConfirm.addEventListener("input", (e) => {
    if (passwConfirm.value !== passw.value) {
        passErrConf.textContent = 'Passwords do not match';
    } else {
        passErrConf.textContent = '';
    }
})


submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    if(count > 5){
        cardContainer.style.display = 'none'
        outroOverlay.classList.remove('disabled')
    }
    else{
        for(let i=0; i<errorDisplayers.length; i++){
            errorDisplayers[i].textContent = '*This field is Required'
        }
    }
})
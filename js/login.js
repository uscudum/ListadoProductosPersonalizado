//Inicio de funcionalidad entrega 1

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("submitBtn").addEventListener("click", () => {
        let inputEmail = document.getElementById("inputEmail");
        let inputPassword = document.getElementById("inputPassword");
        let passedValidation = true;
        
        if (inputEmail.value === '') {
            inputEmail.classList.add("is-invalid");
            passedValidation = false;
        } else {
            inputEmail.classList.remove("is-invalid");
        }

        if (inputPassword.value === '') {
            inputPassword.classList.add("is-invalid");
            passedValidation = false;
        } else {
            inputPassword.classList.remove("is-invalid");
        }

        if (passedValidation) {
            window.location = 'index.html';
        }
    });
});


//Fin de funcionalidad entrega 1
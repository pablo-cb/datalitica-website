const nameInput = document.getElementById('your-name');
const emailInput = document.getElementById('your-email');
const messageInput = document.getElementById('your-message');
const checkboxInput = document.querySelector('.contact__form-terms-checkbox');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const checkboxError = document.getElementById('checkbox-error');


function isValidEmail(email) {
    let emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}


// ______________________________________________________________________________ Form Validation


function validateForm(event) {

    let isValid = true;

    if (nameInput.value === '') {
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.style.display = 'none';
    }

    if (emailInput.value === '' || isValidEmail(emailInput.value)===false) {
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    if (messageInput.value === '') {
        messageError.style.display = 'block';
        isValid = false;
    } else {
        messageError.style.display = 'none';
    }

    if (!checkboxInput.checked) {
        checkboxError.style.display = 'block';
        isValid = false;
    } else {
        checkboxError.style.display = 'none';
    }

    // Agregar eventos de escucha para ocultar los mensajes de error cuando se interactúa con los campos
    nameInput.addEventListener('input', function() {
        nameError.style.display = 'none';
    });

    emailInput.addEventListener('input', function() {
        emailError.style.display = 'none';
    });

    messageInput.addEventListener('input', function() {
        messageError.style.display = 'none';
    });

    checkboxInput.addEventListener('change', function() {
        checkboxError.style.display = 'none';
    });

    if (!isValid) {
        event.preventDefault();
    }

    if (nameInput.value !== '' && emailInput.value !== '' && messageInput.value !== '' && checkboxInput.checked && isValid){
        console.log("sí entro");
        showThankYouMessage();
    }

    return isValid;
}

// ______________________________________________________________________________ Thank you Banner


function showThankYouMessage() {
    // Oculta el formulario
    const formContainer = document.querySelector('.contact__form');
    formContainer.style.display = 'none';

    // Crea el elemento del mensaje de agradecimiento y configura su contenido
    const thankYouMessage = document.createElement('div');
    thankYouMessage.className = 'thank-you-message';
    thankYouMessage.innerHTML = `
    <h2 class="thank-you-heading h2-global-font">Thank you for contacting us!</h2>
    <p class="thank-you-text h4-global-font">We appreciate your message and will get back to you shortly.</p>
    <button class="navbar__button-cta button-secondary button-global-font" onclick="window.location.href = 'index.html'">Home Page</button>
    `;
    

    // Agrega el mensaje de agradecimiento al contenedor del formulario
    const formContainerParent = formContainer.parentNode;
    formContainerParent.appendChild(thankYouMessage);
}
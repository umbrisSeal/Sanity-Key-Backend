
function validarEmail(email) {
    regexEmail = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if(!regexEmail.test(email)) return false;

    return true;
}

module.exports = validarEmail;

function validarPassword(password) {
    // Filtros: de 6-20 caracteres, al menos 1 numero, al menos 1 caracter especial, se permiten espacios.
    passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,20}$/;

    if(!passwordRegex.test(password)) return false;
    
    return true;
}

module.exports = validarPassword;
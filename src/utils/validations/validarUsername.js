
function validarUsername(nuevoUsername) {
    const regexUsername = /^$|^[a-zA-Z][a-zA-Z0-9 ]{0,19}$/
    return regexUsername.test(nuevoUsername);
}

module.exports = validarUsername;

/*
    - Maximo 20 caracteres.
    - Solo caracteres alfanumericos.
    - No puede empezar con un numero o espacio.
    - Se permite un texto vacio (borrar username).
*/
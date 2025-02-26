
function validarBio(nuevoBio) {
    const regexBio = /^$|^[a-zA-Z][a-zA-Z0-9 .,!]{0,99}$/
    return regexBio.test(nuevoBio);
}

module.exports = validarBio;

/*
    - Maximo 100 caracteres.
    - Se permite dejar en blanco.
    - Se permiten letras y numeros.
    - Se permiten los siguientes caracteres especiales: ".", "," y "!".
    - Se permiten espacios.
    - El primer caracter debe de ser una letra.
*/
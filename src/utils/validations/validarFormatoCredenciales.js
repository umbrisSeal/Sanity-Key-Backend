const validarEmail = require("./validarEmail");

function validarFormatoCredenciales(body) {
    const { email, password } = body;

    if(!(email && password)) return false;
    if(!validarEmail(email)) return false;

    return true;
}

module.exports = validarFormatoCredenciales;
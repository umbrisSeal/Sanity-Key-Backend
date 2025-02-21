
const ERROR = require('../messages/errors/error');
const validarEmail = require('./validarEmail');
const validarPassword = require('./validarPassword');

function validarFormularioRegistro(req) {
    const {email, password, passwordRepetido} = req.body;
    const errores = {};

    if(!validarEmail(email)) errores.email = ERROR.es.EMAIL_INCORRECTO;
    if(!validarPassword(password)) errores.password = ERROR.es.PASSWORD_FORMATO_INCORRECTO;
    if(password !== passwordRepetido) errores.passwordRepetido = ERROR.es.PASSWORDS_NO_COINCIDEN;

    if(Object.keys(errores).length > 0) {
        req.errores = {
            error: ERROR.es.FORMULARIO_INCORRECTO,
            detalles: errores
        };
        req.customStatus = 400;
        return false;
    }

    return true;
}

module.exports = validarFormularioRegistro;
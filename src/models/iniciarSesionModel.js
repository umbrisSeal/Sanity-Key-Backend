const buscarUsuarioEmail = require("../services/database/buscarUsuarioEmail");
const verificarPassword = require("../utils/helpers/verificarPassword");
const ERROR = require("../utils/messages/errors/error");

async function iniciarSesionModel(req) {
    if(req.errores) return;

    const { email, password } = req.body;

    const datosUsuario = await buscarUsuarioEmail(email);
    if(!datosUsuario) {
        // El usuario no se encuentra registrado.
        req.errores = {
            error: 'Email o password incorrecto.',
            detalles: {
                loginError: ERROR.es.LOGIN_ERROR 
            }
        };
        req.customStatus = 401;
        return;
    }
    const { usuario_id, username, password_hash, avatar, verificado } = datosUsuario;
    if(!verificado) {
        // El usuario no ha verificado su cuenta.
        req.errores = {
            error: 'Cuenta no verificada.',
            detalles: {
                verificacionCuenta: ERROR.es.CUENTA_NO_VERIFICADA
            }
        };
        req.customStatus = 401;
        return;
    }
    if(!(await verificarPassword(password, password_hash))) {
        // La contraseña es incorrecta.
        req.errores = {
            error: 'Email o password incorrecto.',
            detalles: {
                loginError: ERROR.es.LOGIN_ERROR
            }
        };
        req.customStatus = 401;
        return;
    }

    req.datosUsuario = {usuario_id, username, email, avatar};
    return;
}

module.exports = iniciarSesionModel;
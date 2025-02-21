const encriptarPassword = require("../utils/helpers/encriptarPassword");
const generarId = require("../utils/helpers/generarID");
const comprobarEmailRepetido = require("../services/database/comprobarEmailRepetido");
const ERROR = require("../utils/messages/errors/error");
const crearUsuario = require("../services/database/crearUsuario");


async function nuevoRegistroModel(req) {

    const usuario_id = generarId(10);
    const email = req.body.email.toLowerCase();
    const password_hash = await encriptarPassword(req.body.password);
    const codigo_activacion = generarId(6);
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1);
    fechaActual.setHours(0, 0, 0, 0);
    const codigo_lifetime = fechaActual.toISOString().split('T')[0];

    const datosNuevoUsuario = {usuario_id, email, password_hash, codigo_activacion, codigo_lifetime};

    if(await comprobarEmailRepetido(email)) {
        req.errores = {
            error: ERROR.es.USUARIO_REPETIDO,
            detalles: {
                usuarioRepetido: ERROR.es.EMAIL_REPETIDO
            }
        };
        req.customStatus = 409;
        return;
    }

    if(!await crearUsuario(datosNuevoUsuario)) {
        req.errores = {
            error: 'Error al intentar crear un nuevo usuario.',
            detalles: {
                errorInterno: ERROR.es.USUARIO_NO_CREADO
            }
        };
        req.customStatus = 500;
        return;
    }

    // Redirigir a la url para registrar su codigo secreto.

}

module.exports = nuevoRegistroModel;
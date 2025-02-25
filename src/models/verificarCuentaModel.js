const borrarUsuario = require("../services/database/borrarUsuario");
const buscarUsuario = require("../services/database/buscarUsuario");
const verificarUsuario = require("../services/database/verificarUsuario");
const ERROR = require("../utils/messages/errors/error");

async function verificarCuentaModel(req, next) {
    const { usuario_id } = req;
    const { codigoVerificacion } = req.body;

    const datosUsuario = await buscarUsuario(usuario_id);

    if(!datosUsuario) { req.customStatus = 404; return req.errores = { error: 'Usuario Inexistente.', detalles: { usuarioNoExiste: ERROR.es.USUARIO_NO_EXISTE }}};

    const {codigo_activacion, codigo_lifetime, verificado} = datosUsuario;
    if(verificado) { req.customStatus = 409; return req.errores = { error: 'Usuario Verificado.', detalles: { usuarioVerificado: ERROR.es.USUARIO_YA_VERIFICADO}}};
    const fechaLifetime = new Date(codigo_lifetime);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const diasTranscurridos = (fechaActual - fechaLifetime) / (24 * 60 * 60 * 1000);
    if(diasTranscurridos >= 1) {
        await borrarUsuario(usuario_id);
        req.customStatus = 403;
        return req.errores = { error: 'Codigo Caducado.', detalles: { codigoCaducado: ERROR.es.CODIGO_CADUCADO }};
    }
    if(codigoVerificacion != codigo_activacion) { req.customStatus = 401; return req.errores = { error: 'Codigo Incorrecto.', detalles: { codigoIncorrecto: ERROR.es.CODIGO_INCORRECTO }}};
    if(!await verificarUsuario(usuario_id)) { req.customStatus = 500; return req.errores = { error: 'Verificacion Fallida.', detalles: { verificacionFallida: ERROR.es.VERIFICACION_FALLIDA }}};

    req.paseDirectoLogin = true;
    next();
}

module.exports = verificarCuentaModel;
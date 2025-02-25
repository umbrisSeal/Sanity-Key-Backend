const ERROR = require("../utils/messages/errors/error");
const validarUsuarioId = require("../utils/validations/validarUsuarioId");
const verificarCuentaView = require("../views/verificarCuentaView");
const verificarCuentaModel = require("../models/verificarCuentaModel");

async function verificarCuentaController(req, res, next) {
    const { id } = req.query;

    if(validarUsuarioId(id)) {
        req.usuario_id = id;
    } else {
        req.customStatus = 400;
        req.errores = {
            error: 'Usuario ID incorrecto.',
            detalles: {
                error_id: ERROR.es.USUARIO_ID_INVALIDO
            }
        }
    };

    if(!req.errores) await verificarCuentaModel(req);
    if(req.paseDirectoLogin) return next();

    verificarCuentaView(req, res);
}

module.exports = verificarCuentaController;
const actualizarPerfilModel = require("../models/actualizarPerfilModel");
const decodificarJwt = require("../utils/helpers/decodificarJwt");
const ERROR = require("../utils/messages/errors/error");
const validarDatosPerfil = require("../utils/validations/validarDatosPerfil");
const actualizarPerfilView = require("../views/actualizarPerfilView");

async function actualizarPerfilController(req, res) {
    const { nuevoUsername, nuevoAvatar, nuevoBio } = req.body;
    req.datosUsuario = decodificarJwt(req.cookies.sessionToken);
    req.usuario_id = req.datosUsuario.usuario_id;

    if(nuevoUsername == null || nuevoAvatar == null || nuevoBio == null) {
        req.customStatus = 400;
        req.errores = {
            error: 'Solicitud Incorrecta.',
            detalles: {
                solicitudIncorrecta: ERROR.es.SOLICITUD_INCORRECTA
            }
        };
        actualizarPerfilView(req, res);
        return;
    }
    req.nuevosDatos = {nuevoUsername, nuevoAvatar, nuevoBio};
    if(!validarDatosPerfil(req.nuevosDatos)) {
        req.customStatus = 400;
        req.errores = {
            error: 'Datos Incorrectos',
            detalles: {
                datosIncorrectos: ERROR.es.FORMULARIO_INCORRECTO
            }
        };
        actualizarPerfilView(req, res);
        return;
    }

    await actualizarPerfilModel(req)
    actualizarPerfilView(req, res);
}

module.exports = actualizarPerfilController;
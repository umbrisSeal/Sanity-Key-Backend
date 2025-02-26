const iniciarSesionModel = require("../models/iniciarSesionModel");
const ERROR = require("../utils/messages/errors/error");
const validarFormatoCredenciales = require("../utils/validations/validarFormatoCredenciales");
const iniciarSesionView = require("../views/iniciarSesionView");


async function iniciarSesionController(req, res) {

    if(!req.datosUsuario || !req.paseDirectoLogin) {
        // Verificacion normal de campos.
        if(!validarFormatoCredenciales(req.body)) { 
            req.customStatus = 400;
            req.errores = {error: 'Formato Incorrecto', detalles: { formatoIncorrecto: ERROR.es.EMAIL_INCORRECTO}}
        };
        await iniciarSesionModel(req);
    }

    iniciarSesionView(req, res);
}

module.exports = iniciarSesionController;
const nuevoRegistroModel = require("../models/nuevoRegistroModel");
const validarFormularioRegistro = require("../utils/validations/validarFormularioRegistro");
const nuevoRegistroView = require("../views/nuevoRegistroView");

async function nuevoRegistroController(req, res) {
    // Verificar por body _csrf o heder X-CSRF-Token con middleware csrfProtection. (validacion de formulario)

    if(validarFormularioRegistro(req)) await nuevoRegistroModel(req, res);
    
    nuevoRegistroView(req, res);
}

module.exports = nuevoRegistroController;
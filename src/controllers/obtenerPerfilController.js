const decodificarJwt = require("../utils/helpers/decodificarJwt");
const obtenerPerfilModel = require("../models/obtenerPerfilModel");
const obtenerPerfilView = require("../views/obtenerPerfilView");


async function obtenerPerfilController(req, res) {
    const { usuario_id } = decodificarJwt(req.cookies.sessionToken);
    req.usuario_id = usuario_id;

    await obtenerPerfilModel(req);
    obtenerPerfilView(req, res);
}

module.exports = obtenerPerfilController;
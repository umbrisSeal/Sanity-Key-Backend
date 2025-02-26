const decodificarJwt = require("../utils/helpers/decodificarJwt");
const borrarPerfilModel = require("../models/borrarPerfilModel");
const borrarPerfilView = require("../views/borrarPerfilView");

async function borrarPerfilController(req, res) {
    // Extraer el user id, mandar a borrar la cuenta. Borrar su sessionToken, redireccionar a la pagina de inicio.
    const sessionToken = req.cookies.sessionToken;
    const { usuario_id } = decodificarJwt(sessionToken);
    req.usuario_id = usuario_id;

    await borrarPerfilModel(req);
    borrarPerfilView(req, res);
}

module.exports = borrarPerfilController;
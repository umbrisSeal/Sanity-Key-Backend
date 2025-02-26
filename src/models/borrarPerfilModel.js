const borrarUsuario = require("../services/database/borrarUsuario");

async function borrarPerfilModel(req) {
    await borrarUsuario(req.usuario_id);
}

module.exports = borrarPerfilModel;
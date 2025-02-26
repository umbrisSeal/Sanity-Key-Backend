const buscarUsuario = require("../services/database/buscarUsuario");
const crearSessionToken = require("../utils/helpers/crearSessionToken");
const ERROR = require("../utils/messages/errors/error");

async function obtenerPerfilModel(req) {
    const usuario_id = req.usuario_id;

    const datosUsuario = await buscarUsuario(usuario_id);

    if(!datosUsuario) {req.customStatus = 404; return req.errores = { error: 'Usuario no existe.', detalles: { usuarioInvalido: ERROR.es.USUARIO_NO_EXISTE}}; };
    const { email, username, avatar, bio } = datosUsuario;

    req.datosPerfil = {usuario_id, email, username, avatar, bio};
    req.nuevoSessionToken = crearSessionToken(req.datosPerfil);
    return;
}

module.exports = obtenerPerfilModel;
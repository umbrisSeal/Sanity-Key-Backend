const actualizarPerfilUsuario = require("../services/database/actualizarPerfilUsuario");
const ERROR = require("../utils/messages/errors/error");

async function actualizarPerfilModel(req) {
    const { nuevoUsername, nuevoAvatar, nuevoBio } = req.nuevosDatos;
    const usuario_id = req.usuario_id;

    await actualizarPerfilUsuario(usuario_id, nuevoUsername, nuevoAvatar, nuevoBio);
    if(!await actualizarPerfilUsuario(usuario_id, nuevoUsername, nuevoAvatar, nuevoBio)) {
        req.customStatus = 500;
        req.errores = {
            error: 'Usuario No Actualizado',
            detalles: {
                usuarioNoActualizado: ERROR.es.USUARIO_NO_ACTUALIZADO
            }
        };
        return;
    }

    return;
}

module.exports = actualizarPerfilModel;
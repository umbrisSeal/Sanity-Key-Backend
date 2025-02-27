const crearSessionToken = require("../utils/helpers/crearSessionToken");
const opcionesCookie = require("../utils/helpers/opcionesCookie");

function actualizarPerfilView(req, res) {
    if(req.errores) return res.status(req.customStatus).json(req.errores);

    const { usuario_id, email } = req.datosUsuario;
    const { nuevoUsername, nuevoAvatar } = req.nuevosDatos;
    const nuevosDatosUsuario = {usuario_id, username: nuevoUsername, email, avatar: nuevoAvatar};

    const nuevoSessionToken = crearSessionToken(nuevosDatosUsuario);

    res.cookie('sessionToken', nuevoSessionToken, opcionesCookie);
    res.status(200).send("Usuario actualizado.");
}

module.exports = actualizarPerfilView;
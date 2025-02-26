const opcionesCookie = require("../utils/helpers/opcionesCookie");

function obtenerPerfilView(req, res) {
    if(req.errores) {
        res.status(req.customStatus).json(req.errores);
        return;
    }

    res.cookie('sessionToken', req.nuevoSessionToken, opcionesCookie);
    res.status(200).json({perfil: req.datosPerfil});
}

module.exports = obtenerPerfilView;
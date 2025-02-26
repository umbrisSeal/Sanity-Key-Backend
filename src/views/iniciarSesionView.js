const crearSessionToken = require("../utils/helpers/crearSessionToken");
const opcionesCookie = require("../utils/helpers/opcionesCookie");

function iniciarSesionView(req, res) {

    if(req.errores) return res.status(req.customStatus.json(req.errores));

    const sessionToken = crearSessionToken(req.datosUsuario);
    res.cookie("sessionToken", sessionToken, opcionesCookie);
    res.redirect(302, `${process.env.URL_FRONTEND}${process.env.FRONTEND_PATH_INICIO}`);
}

module.exports = iniciarSesionView;
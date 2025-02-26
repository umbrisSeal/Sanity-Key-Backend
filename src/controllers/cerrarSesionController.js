
function cerrarSesionController(req, res) {
    res.clearCookie('sessionToken', {path: '/'});
    res.redirect(302, `${process.env.URL_FRONTEND}${process.env.FRONTEND_PATH_LOGOUT}`);
}

module.exports = cerrarSesionController;
const validarJwt = require("../validations/validarJwt");

function autenticar(req, res, next) {

    const sessionToken = req.cookies.sessionToken;
    req.autenticado = validarJwt(sessionToken);

    if(req.autenticado) return next();

    res.clearCookie('sessionToken', {path: '/'});
    res.redirect(302, `${process.env.URL_FRONTEND}${process.env.FRONTEND_PATH_LOGIN}`);
}

module.exports = autenticar;
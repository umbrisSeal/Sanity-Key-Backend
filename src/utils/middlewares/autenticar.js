const validarJwt = require("../validations/validarJwt");

function autenticar(req, res, next) {

    const sessionToken = req.cookies.sessionToken;
    req.autenticado = validarJwt(sessionToken);

    if(req.autenticado) return next();

    res.clearCookie('sessionToken', {path: '/'});
    res.redirect(302, `${process.env.URL_FRONTEND}${process.env.FRONTEND_PATH_LOGIN}`);
}

module.exports = autenticar;

/*
	auth: Verifica el JWT. En caso de no ser valido, borra la cookie de sessionToken y redirige a la pagina para logearse.
		-> Si el tiempo de vida es poco, refresh?

*/
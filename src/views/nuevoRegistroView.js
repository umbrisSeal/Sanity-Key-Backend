const { URL } = require('url');


function nuevoRegistroView(req, res) {

    if(req.hasOwnProperty("errores")) {
        res.status(req.customStatus).json(req.errores);
        return;
    }

    const urlVerificarCodigo = new URL(process.env.FRONTEND_PATH_VERIFICAR, process.env.URL_FRONTEND);
    urlVerificarCodigo.searchParams.append('id', req.nuevoId);

    res.redirect(302, urlVerificarCodigo);
}

module.exports = nuevoRegistroView;
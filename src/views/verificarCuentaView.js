
function verificarCuentaView(req, res) {

    // Esta vista siempre manejara errores.

    if(req.errores) return res.status(400).json(req.errores);

    //res.send("Todo tranquilo");
    res.json(req.prueba);
}

module.exports = verificarCuentaView;
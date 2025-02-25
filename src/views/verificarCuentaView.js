
function verificarCuentaView(req, res) {
    if(req.errores) return res.status(req.customStatus).json(req.errores);

    res.send("Todo bien.");
}

module.exports = verificarCuentaView;
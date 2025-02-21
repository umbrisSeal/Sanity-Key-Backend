
function nuevoRegistroView(req, res) {

    if(req.hasOwnProperty("errores")) {
        // Enviar una respuesta.
        res.status(req.customStatus).json(req.errores);
        return;
    }

    res.status(200).send("Usuario creado exitosamente. Se necesita redireccion.");
}

module.exports = nuevoRegistroView;
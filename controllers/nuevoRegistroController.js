
function nuevoRegistroController(req, res) {
    // Verificar por body _csrf o heder X-CSRF-Token con middleware csrfProtection. (validacion de formulario)
    res.send("Ha logrado pasar el CSRF.");

    // Model (await)
    // view
}

module.exports = nuevoRegistroController;
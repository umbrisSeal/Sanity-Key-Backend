const obtenerOpcionesAvatars = require('../services/dice-avatars/obtenerOpcionesAvatars')

function obtenerOpcionesAPIController(req, res) {
    res.status(200).json(obtenerOpcionesAvatars());
}

module.exports = obtenerOpcionesAPIController;
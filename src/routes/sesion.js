const express = require('express');
const sesion = express.Router();

const cerrarSesionController = require('../controllers/cerrarSesionController');


sesion.delete("/", cerrarSesionController);



module.exports = sesion;
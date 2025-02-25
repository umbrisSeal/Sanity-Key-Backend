const express = require('express');
const verificar = express.Router();
const verificarCuentaController = require('../controllers/verificarCuentaController');
const iniciarSesionController = require('../controllers/iniciarSesionController');


verificar.post("/", verificarCuentaController, iniciarSesionController);


module.exports = verificar;
const express = require('express');
const verificar = express.Router();
const verificarCuentaController = require('../controllers/verificarCuentaController');


verificar.post("/", verificarCuentaController);


module.exports = verificar;
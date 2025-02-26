const express = require('express');
const perfil = express.Router();

const autenticar = require('../utils/middlewares/autenticar');
const obtenerPerfilController = require('../controllers/obtenerPerfilController');


perfil.get('/', autenticar, obtenerPerfilController);


module.exports = perfil;
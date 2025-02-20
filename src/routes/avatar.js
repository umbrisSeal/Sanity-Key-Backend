const express = require('express');
const avatar = express.Router();
const obtenerOpcionesAPIController = require('../controllers/obtenerOpcionesAPIController');

avatar.get("/", obtenerOpcionesAPIController);


module.exports = avatar;
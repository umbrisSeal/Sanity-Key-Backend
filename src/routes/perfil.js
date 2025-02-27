const express = require('express');
const perfil = express.Router();
const csurf = require('csurf');
const csrfProtection = csurf({cookie: true});
const ERROR = require('../utils/messages/errors/error');

const autenticar = require('../utils/middlewares/autenticar');
const obtenerPerfilController = require('../controllers/obtenerPerfilController');
const borrarPerfilController = require('../controllers/borrarPerfilController');
const actualizarPerfilController = require('../controllers/actualizarPerfilController');


perfil.get('/', autenticar, obtenerPerfilController);
perfil.put('/', csrfProtection, autenticar, actualizarPerfilController);
perfil.delete('/', csrfProtection, autenticar, borrarPerfilController);


perfil.use( (err, req, res, next) => {
    if(err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({
            error: 'CSRF Token Invalido',
            detalles: {
                _csrf: ERROR.es.CSRF_INVALIDO
            }
        });
    }
    return;
});


module.exports = perfil;
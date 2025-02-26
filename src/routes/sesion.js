const express = require('express');
const sesion = express.Router();
const csurf = require('csurf');
const csrfProtection = csurf({cookie: true});


const ERROR = require('../utils/messages/errors/error');
const cerrarSesionController = require('../controllers/cerrarSesionController');
const iniciarSesionController = require('../controllers/iniciarSesionController');


sesion.post("/", csrfProtection, iniciarSesionController);
sesion.delete("/", cerrarSesionController);



sesion.use( (err, req, res, next) => {
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



module.exports = sesion;
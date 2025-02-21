const express = require('express');
const registro = express.Router();

const csurf = require('csurf');
const csrfProtection = csurf({cookie: true});
const ERROR = require('../utils/messages/errors/error');


const solicitarCSRFController = require('../controllers/solicitarCSRFController');
const nuevoRegistroController = require('../controllers/nuevoRegistroController');


registro.get("/", csrfProtection, solicitarCSRFController);
registro.post("/", csrfProtection, nuevoRegistroController);


registro.use( (err, req, res, next) => {
    if(err.code === 'EBADCSRFTOKEN') {
        res.status(403).json({
            error: 'CSRF Token',
            detalles: {
                _csrf: ERROR.es.CSRF_INVALIDO
            }
        });
        return;
    }
    res.send("Algo esta mal, pero no es el error CSRF.");
});


module.exports = registro;
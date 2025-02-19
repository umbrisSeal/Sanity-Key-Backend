const express = require('express');
const registro = express.Router();

const csurf = require('csurf');
const csrfProtection = csurf({cookie: true});

const solicitarCSRFController = require('../controllers/solicitarCSRFController');
const nuevoRegistroController = require('../controllers/nuevoRegistroController');


registro.get("/", csrfProtection, solicitarCSRFController);
registro.post("/", csrfProtection, nuevoRegistroController);


registro.use( (err, req, res, next) => {
    if(err.code === 'EBADCSRFTOKEN') {
        // Se requiere una respuesta menos generica.
        res.send("Tu token CSRF es incorrecto.");
        next();
    }
    res.send("Algo esta mal, pero no es el error CSRF.");
});


module.exports = registro;
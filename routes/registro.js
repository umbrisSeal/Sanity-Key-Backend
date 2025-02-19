const csurf = require('csurf');
const express = require('express');
const registro = express.Router();

const csrfProtection = csurf({cookie: true});

registro.get("/", csrfProtection, (req, res) => {
    const responseBody = {
        csrfToken: `${req.csrfToken()}`,
    }
    res.status(200).json(responseBody);
});

registro.post("/", csrfProtection, (req,res) => {
    // Verificar por body _csrf o heder X-CSRF-Token con middleware csrfProtection. (validacion de formulario)
    res.send("Ha logrado pasar el CSRF.");
});

registro.use( (err, req, res, next) => {
    if(err.code === 'EBADCSRFTOKEN') {
        // Se requiere una respuesta menos generica.
        res.send("Tu token CSRF es incorrecto.");
        next();
    }
    res.send("Algo esta mal, pero no es el error CSRF.");
});


module.exports = registro;
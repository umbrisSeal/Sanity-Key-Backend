const express = require('express');
const mainRouter = express.Router();

const registro = require('./registro');


mainRouter.use("/registro", registro);

// define endpoint files

// mainRouter.use("endpoint", endpoint file)



mainRouter.get('/', (req, res) => {
    res.send("Hola mundo, estas en inicio.");
})

mainRouter.all("*", (req, res) => {
    res.send("Error, ruta no encontrada.");
})


module.exports = mainRouter;
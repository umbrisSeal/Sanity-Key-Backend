const express = require('express');
const mainRouter = express.Router();

const registro = require('./registro');
const avatar = require('./avatar');
const verificar = require('./verificar');


mainRouter.use("/avatar", avatar);
mainRouter.use("/registro", registro);
mainRouter.use("/verificar", verificar);

// define endpoint files

// mainRouter.use("endpoint", endpoint file)



mainRouter.get('/', (req, res) => {
    res.send("Hola mundo, estas en inicio.");
})

mainRouter.all("*", (req, res) => {
    res.send("Error, ruta no encontrada.");
})


module.exports = mainRouter;
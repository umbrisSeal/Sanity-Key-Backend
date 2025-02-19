const express = require('express');
const mainRouter = express.Router();

// define endpoint files

// mainRouter.use("endpoint", endpoint file)



mainRouter.get('/', (req, res) => {
    res.send("Hola mundo");
})



module.exports = mainRouter;
const express = require('express');
const app = express();

const mainRouter = require('./routes/mainRouter');

const port = 8000


app.use('/', mainRouter);

app.all("*", (req, res) => {
    res.send("Error, ruta no encontrada.");
})



app.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto: ${port}`);
})
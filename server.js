const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const mainRouter = require('./routes/mainRouter');

const port = 8000

app.use(cookieParser());    // Obtener cookies
app.use(express.json());    // Obtener request.body
app.use('/', mainRouter);

app.all("*", (req, res) => {
    res.send("Error, ruta no encontrada.");
})



app.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto: ${port}`);
})
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

const mainRouter = require('./src/routes/mainRouter');

const port = 8000

app.use(cookieParser());    // Obtener cookies
app.use(express.json());    // Obtener request.body

app.use('/', mainRouter);



app.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto: ${port}`);
})
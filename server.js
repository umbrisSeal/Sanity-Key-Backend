const express = require('express');
const app = express();

const port = 8000


app.get('/', (req, res) => {
    res.send("Hola mundo.");
})



app.listen(port, () => {
    console.log(`Ejecutando servidor en el puerto: ${port}`);
})
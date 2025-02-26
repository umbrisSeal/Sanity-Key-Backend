const jwt = require('jsonwebtoken');

function decodificarJwt(tokenJWT) {
    try {
        // Solo extrae el contenido del JWT, no lo valida.
        const payload = jwt.decode(tokenJWT);
        return payload;
    } catch {
        return false;
    }
}

module.exports = decodificarJwt;
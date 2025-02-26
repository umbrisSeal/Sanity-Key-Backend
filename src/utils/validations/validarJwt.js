const jwt = require('jsonwebtoken');

function validarJwt(tokenJWT) {
    try {
        jwt.verify(tokenJWT, process.env.JWT_SECRET_KEY);
        return true;
    } catch {
        return false;
    }
}

module.exports = validarJwt;
const jwt = require('jsonwebtoken');

function crearJwt(payload) {

    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
        expiresIn: "15d",
        algorithm: "HS256"
    });

    return token;
}

module.exports = crearJwt;
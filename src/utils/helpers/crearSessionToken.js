const crearJwt = require("./crearJwt");


function crearSessionToken(datosUsuario) {
    const {usuario_id, username, email, avatar} = datosUsuario;
    const payload = {usuario_id, username, email, avatar};
    const sessionToken = crearJwt(payload);

    return sessionToken;
}

module.exports = crearSessionToken;
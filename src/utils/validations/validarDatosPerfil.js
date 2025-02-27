const validarUsername = require("./validarUsername");
const validarBio = require("./validarBio");
const validarAvatar = require("./validarAvatar");

function validarDatosPerfil(nuevosDatos) {
    const { nuevoUsername, nuevoAvatar, nuevoBio } = nuevosDatos;

    if(!validarUsername(nuevoUsername)) return false;
    if(!validarBio(nuevoBio)) return false;
    if(!validarAvatar(nuevoAvatar)) return false;

    return true;
}

module.exports = validarDatosPerfil;
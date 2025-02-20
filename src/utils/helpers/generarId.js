const { customAlphabet, nanoid } = require('nanoid');

function generarId(extension = 10) {
    // nanoid(extension) Default usa minisculas, mayusculas y numeros.
    return customAlphabet("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", extension)();
}

module.exports = generarId;
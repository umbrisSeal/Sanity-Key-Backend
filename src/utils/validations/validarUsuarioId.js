
function validarUsuarioId(usuario_id) {
    regexUsuarioId = /^[A-Z0-9]{10}$/

    return regexUsuarioId.test(usuario_id);
}

module.exports = validarUsuarioId;
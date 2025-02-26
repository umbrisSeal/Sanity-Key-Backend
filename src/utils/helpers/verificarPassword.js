const bcrypt = require('bcrypt');

async function verificarPassword(password, passwordHash) {
    try {
        return await bcrypt.compare(password, passwordHash);
    } catch {
        return false;
    }
}

module.exports = verificarPassword;
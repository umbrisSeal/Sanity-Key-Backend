const bcrypt = require('bcrypt');

async function encriptarPassword(password) {
    const sal = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, sal);

    return hash;
}

module.exports = encriptarPassword;
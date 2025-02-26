const AppDataSource = require("./data-source");

async function buscarUsuarioEmail(email) {
    try {
        await AppDataSource.initialize();

        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");
        const datosUsuario = await repositorioUsuarios.findOne({ where: {email: email}, select: ['usuario_id', 'username', 'password_hash', 'avatar', 'verificado']});
        return datosUsuario;

    } catch {
        return false;
    } finally {
        AppDataSource.destroy();
    }
}

module.exports = buscarUsuarioEmail;
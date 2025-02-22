const AppDataSource = require("./data-source");


async function verificarUsuario(usuario_id) {
    try {
        await AppDataSource.initialize();

        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");
        await repositorioUsuarios.update({ usuario_id: usuario_id }, {verificado: true});

        return true;

    } catch {
        return false;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = verificarUsuario;
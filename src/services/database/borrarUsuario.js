const AppDataSource = require("./data-source");


async function borrarUsuario(usuario_id) {
    try {
        await AppDataSource.initialize();

        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");
        await repositorioUsuarios.delete({ usuario_id: usuario_id });

        return;

    } catch {
        return;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = borrarUsuario;
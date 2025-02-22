const AppDataSource = require("./data-source");

async function buscarUsuario(usuario_id) {
    try {
        await AppDataSource.initialize();

        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");
        const datosUsuario = await repositorioUsuarios.findOneBy({ usuario_id: usuario_id});

        return datosUsuario;

    } catch {
        return false;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = buscarUsuario;
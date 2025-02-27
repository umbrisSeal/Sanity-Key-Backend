const AppDataSource = require("./data-source");

async function actualizarPerfilUsuario(usuario_id, nuevoUsername, nuevoAvatar, nuevoBio) {
    try {
        await AppDataSource.initialize();
        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");
        await repositorioUsuarios.update({usuario_id: usuario_id}, {username: nuevoUsername, avatar: nuevoAvatar, bio: nuevoBio});
        return true;
    } catch {
        return false;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = actualizarPerfilUsuario;
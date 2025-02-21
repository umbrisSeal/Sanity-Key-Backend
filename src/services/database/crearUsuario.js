const AppDataSource = require('./data-source');

async function crearUsuario(datosNuevoUsuario) {
    // Deberiamos mandar el appDataSource? Nah, siempre es la misma configuracion.
    const {usuario_id, email, password_hash, codigo_activacion, codigo_lifetime} = datosNuevoUsuario;
    try {
        // Iniciar conexion.
        await AppDataSource.initialize();

        // Crear un repositorio para la entidad (tabla) Usuario.
        const repositorioUsuarios = AppDataSource.getRepository("Usuarios");

        // Crear un usuario.
        const nuevoUsuario = repositorioUsuarios.create({
            usuario_id: usuario_id,
            username: '',
            email: email,
            password_hash: password_hash,
            bio: '',
            avatar: '',
            verificado: false,
            codigo_activacion: codigo_activacion,
            codigo_lifetime: codigo_lifetime
        });

        // Crear nuevo usuario en la base de datos. (Guardar operaciones hechas)
        await repositorioUsuarios.save(nuevoUsuario);

        return true;

        // Otras operaciones...
    } catch(error) {
        // console.log(`Error, el usuario nuevo no se creo: ${error}`);
        return false;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = crearUsuario;
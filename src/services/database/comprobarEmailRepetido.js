const AppDataSource = require("./data-source");

async function comprobarEmailRepetido(emailBuscado) {
    try {
        await AppDataSource.initialize();
        const repositorioUsuarios = AppDataSource.getRepository('Usuarios');
        const resultadoBusqueda = await repositorioUsuarios.findOneBy({ email: emailBuscado });

        return !!resultadoBusqueda;
        
    } catch(error) {
        return true;
    } finally {
        await AppDataSource.destroy();
    }
}

module.exports = comprobarEmailRepetido;
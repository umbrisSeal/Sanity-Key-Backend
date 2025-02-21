const encriptarPassword = require("../utils/helpers/encriptarPassword");
const generarId = require("../utils/helpers/generarID");


async function nuevoRegistroModel(req, res) {

    const usuario_id = generarId(10);
    const email = req.body.email.toLowerCase();
    const password_hash = await encriptarPassword(req.body.password);
    const verificado = false; // Omitir? Siempre es falso.
    const codigo_activacion = generarId(6);
    const fechaActual = new Date();
    fechaActual.setDate(fechaActual.getDate() + 1);
    fechaActual.setHours(0, 0, 0, 0);
    const codigo_lifetime = fechaActual.toISOString().split('T')[0];

    // Comprobar si el correo ya existe en la base de datos.

    // Crear el nuevo usuario.

    // Redirigir a la url para registrar su codigo secreto.


    console.log(`${codigo_lifetime}`);

    /*
        todo
        - Generar 1 ID nuevo y 1 clave de acceso nueva.
        - Generar los campos necesarios para la base de datos. (formatear datos).
        - Comprobar si el correo electronico ya existe en la base de datos.
            - Si email ya existe retornar un error y terminar el proceso.
        - Realizar el inserto del usuario.
            - Retornar un error si no se pudo crear el usuario.
        - Redirigir al usuario a una URL con su nuevo ID como querystring para que ingrese su clave de acceso.
    */


}

module.exports = nuevoRegistroModel;
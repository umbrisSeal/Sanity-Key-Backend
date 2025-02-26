const crearSessionToken = require("../utils/helpers/crearSessionToken");
const opcionesCookie = require("../utils/helpers/opcionesCookie");


async function iniciarSesionController(req, res) {

    if(!req.datosUsuario || !req.paseDirectoLogin) {
        // Verificacion normal de campos.
        req.usuario_id = 'ID FALSO';
        // crear req.datosUsuario aqui.
    }

    // Cache de errores aqui.


    const sessionToken = crearSessionToken(req.datosUsuario);
    res.cookie('sessionToken', sessionToken, opcionesCookie);


    res.redirect(302, `${process.env.URL_FRONTEND}${process.env.FRONTEND_PATH_INICIO}`);


    /*
        >>> CAMBIAR A CSRF MIDDLEWARE
        >>> AUTH MIDDLEWARE (Solo verifica el session token) su valides.

        
        - Verificar si existen los campos "usuario_id" y "paseDirecto."
            - Si es asi, saltarse hasta generar un JWT.
            - Si no, continuar con este flujo.
        - Obtener datos desde el body.
        - Verificar que usuario (email) existe en la base de datos. Recuperar el usuario.
            - Si no, mandar un error de usuario o correo incorrectos.
        - Comprovar que la cuenta ya esta verificada.
            - Si no, redireccionar para verificar la cuenta (con el usuario_id extraido en nuestra busqueda).
        - Hashear el password.
        - Comprobar los passwords.
            - Si son diferentes mandar mismo error de usuario o correo incorrecto.
        - Si ambos son iguales iniciar sesion:
        - Generar un JWT (session token) con los siguientes datos:
        - Mandar una cookie con el JWT.
        - Redireccionar al usuario a su pagina de inicio.
    */


    //res.send("Todo bien desde login.");


}

module.exports = iniciarSesionController;
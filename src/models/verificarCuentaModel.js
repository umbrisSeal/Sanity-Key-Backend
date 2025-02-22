const borrarUsuario = require("../services/database/borrarUsuario");
const buscarUsuario = require("../services/database/buscarUsuario");
const verificarUsuario = require("../services/database/verificarUsuario");
const ERROR = require("../utils/messages/errors/error");

async function verificarCuentaModel(req, next) {
    const { usuario_id } = req;
    const { codigoVerificacion } = req.body;

    const datosUsuario = await buscarUsuario(usuario_id);

    if(!datosUsuario) return req.errores = { error: 'Usuario Inexistente.', detalles: { usuarioNoExiste: ERROR.es.USUARIO_NO_EXISTE }};

    const {codigo_activacion, codigo_lifetime, verificado} = datosUsuario;
    if(verificado) return req.errores = { error: 'Usuario Verificado.', detalles: { usuarioVerificado: ERROR.es.USUARIO_YA_VERIFICADO}};
    const fechaLifetime = new Date(codigo_lifetime);
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const diasTranscurridos = (fechaLifetime - fechaActual) / (24 * 60 * 60 * 1000);
    if(diasTranscurridos >= 1) {
        await borrarUsuario(usuario_id);
        return req.errores = { error: 'Codigo Caducado.', detalles: { codigoCaducado: ERROR.es.CODIGO_CADUCADO }};
    }
    if(codigoVerificacion != codigo_activacion) return req.errores = { error: 'Codigo Incorrecto.', detalles: { codigoIncorrecto: ERROR.es.CODIGO_INCORRECTO }};
    if(!await verificarUsuario(usuario_id)) return req.errores = { error: 'Verificacion Fallida.', detalles: { verificacionFallida: ERROR.es.VERIFICACION_FALLIDA }};

    req.paseDirectoLogin = true;
    //next();
    // Terminar el middleware de login antes de continuar con este.
    // El resto del codigo es inalcanzable.


    
    req.prueba = datosUsuario;

    /*
        - Buscar si esta registrado este id.
            - Si no, retornar un error.
        - Retornar el codigo_verificacion, codigo_lifetime y verificado.
        - Verificar que el usuario NO este verificado.
            - Mandar un error si ya esta verificado. (No autenticar ni hacer nada.)
        - Verificar la fecha actual con el codigo_lifetime.
            - Si ya paso 1 dia despues de codigo_lifetime, borrar cuenta.
            - Mandar un error de que la cuenta no existe.
        - Verificar el codigo ingresado y el codigo_verificacion.
            - Mandar un error si no son los mismos.
        - Cambiar el estado del usuario a verificado = true.
        >>> Siguiente middleware.
        - Mandar un token o valor de "acceso directo" para iniciar sesion sin credenciales.
        - Iniciar sesion: Generar Session Token para usuario. (ya tenemos la informacion para esto).
        - Redirigir a su pagina de inicio.
    */

}

module.exports = verificarCuentaModel;
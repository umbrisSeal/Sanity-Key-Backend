const url = require('url');
const obtenerOpcionesAvatars = require("../../services/dice-avatars/obtenerOpcionesAvatars");

function validarAvatar(nuevoAvatar) {
    const opcionesDiceAvatars = obtenerOpcionesAvatars();
    const parametrosPermitidos = Object.values(opcionesDiceAvatars.opciones).map(opcion => opcion.queryString);

    const avatarUrlString = `${opcionesDiceAvatars.urlBase}${nuevoAvatar}`;
    const avatarUrl = ( () => {
        try {
            const avatarUrlParse = new URL(avatarUrlString);
            return avatarUrlParse;
        } catch {
            return false;
        }
    }
    )();
    if(!avatarUrl) return false;

    const queriesAvatar = Object.fromEntries(avatarUrl.searchParams.entries());
    const parametrosAvatar = Object.keys(queriesAvatar);

    // Verificar que todos los parametros solicitados esten permitidos por la API.
    if(!parametrosAvatar.every( parametro => parametrosPermitidos.includes(parametro) )) return false;
    // Verificar que cada valor de los parametros solicitados esten permitidos por la API.
    const queriesPermitidos = Object.values(opcionesDiceAvatars.opciones);
    const valoresPermitidos = Object.entries(queriesAvatar).every( query => {
        // Buscar el objeto que indica el parametro permitido y los valores que puede tomar para cada query/parametro de la solicitud.
        const queryPermitido = queriesPermitidos.find( queryPermitido => queryPermitido.queryString == query[0] );
        return queryPermitido.valores.includes(query[1]);
    });

    // Re-armar la url nosotros mismos?

    return valoresPermitidos;
}

module.exports = validarAvatar;
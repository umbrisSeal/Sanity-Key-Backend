const TEXTO_BOTON = require("../../utils/messages/ui/textoBotones");

function obtenerOpcionesAvatars() {
    // Solicitar idioma predilecto para seleccionar idioma.
    const opcionesDiceAvatars = {
        urlBase: 'https://api.dicebear.com/9.x/adventurer/svg',
        //formatosPermitidos: ['svg'],
        backgroundColor: {
            queryString: 'backgroundColor',
            valores: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc'],
            nombre: TEXTO_BOTON.BACKGROUND_COLOR.es,
        },
        eyebrows: {
            queryString: 'eyebrows',
            valores: ['variant01'],
            nombre: TEXTO_BOTON.EYEBROWS.es
        },
        eyes: {
            queryString: 'eyes',
            valores: [],
            nombre: TEXTO_BOTON.EYES.es
        },
        features: {
            queryString: 'features',
            valores: [],
            nombre: TEXTO_BOTON.FEATURES.es
        },
        glasses: {
            queryString: 'glasses',
            valores: [],
            nombre: TEXTO_BOTON.GLASSES.es
        },
        hair: {
            queryString: 'hair',
            valores: [],
            nombre: TEXTO_BOTON.HAIR.es
        },
        hairColor: {
            queryString: 'hairColor',
            valores: [],
            nombre: TEXTO_BOTON.HAIR_COLOR.es
        },
        mouth: {
            queryString: 'mouth',
            valores: [],
            nombre: TEXTO_BOTON.MOUTH.es
        },
        skinColor: {
            queryString: 'skinColor',
            valores: [],
            nombre: TEXTO_BOTON.SKIN_COLOR.es
        }
    }

    return opcionesDiceAvatars;
}


module.exports = obtenerOpcionesAvatars;
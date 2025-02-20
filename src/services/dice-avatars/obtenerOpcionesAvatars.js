const TEXTO_BOTON = require("../../utils/messages/ui/textoBotones");

function obtenerOpcionesAvatars() {
    // Solicitar idioma predilecto para seleccionar idioma.
    const opcionesDiceAvatars = {
        urlBase: 'https://api.dicebear.com/9.x/adventurer/svg',
        //formatosPermitidos: ['svg'],
        opciones: {
            backgroundColor: {
                queryString: 'backgroundColor',
                valores: ['b6e3f4', 'c0aede', 'd1d4f9', 'ffd5dc'],
                nombre: TEXTO_BOTON.BACKGROUND_COLOR.es,
            },
            eyebrows: {
                queryString: 'eyebrows',
                valores: ['variant01', 'variant02', 'variant03', 'variant04', 'variant05', 'variant06', 'variant07', 'variant08', 'variant09', 'variant10', 'variant11', 'variant12', 'variant13', 'variant14', 'variant15'],
                nombre: TEXTO_BOTON.EYEBROWS.es
            },
            eyes: {
                queryString: 'eyes',
                valores: ['variant01', 'variant02', 'variant03', 'variant04', 'variant05', 'variant06', 'variant07', 'variant08', 'variant09', 'variant10', 'variant11', 'variant12', 'variant13', 'variant14', 'variant15', 'variant16', 'variant17', 'variant18', 'variant19', 'variant20', 'variant21', 'variant22', 'variant23', 'variant24', 'variant25', 'variant26'],
                nombre: TEXTO_BOTON.EYES.es
            },
            features: {
                queryString: 'features',
                valores: ['birthmark', 'blush', 'freckles', 'mustache'],
                nombre: TEXTO_BOTON.FEATURES.es
            },
            glasses: {
                queryString: 'glasses',
                valores: ['variant01', 'variant02', 'variant03', 'variant04', 'variant05'],
                nombre: TEXTO_BOTON.GLASSES.es
            },
            hair: {
                queryString: 'hair',
                valores: ['long01', 'long02', 'long03', 'long04', 'long05', 'long06', 'long07', 'long08', 'long09', 'long10', 'long11', 'long12', 'long13', 'long14', 'long15', 'long16', 'long17', 'long18', 'long19', 'long20', 'long21', 'long22', 'long23', 'long24', 'long25', 'long26', 'short01', 'short02', 'short03', 'short04', 'short05', 'short06', 'short07', 'short08', 'short09', 'short10', 'short11', 'short12', 'short13', 'short14', 'short15', 'short16', 'short17', 'short18', 'short19'],
                nombre: TEXTO_BOTON.HAIR.es
            },
            hairColor: {
                queryString: 'hairColor',
                valores: ['0e0e0e', '3eac2c', '6a4e35', '85c2c6', '796a45', '562306', '592454', 'ab2a18', 'ac6511', 'b9a05f', 'cb6820', 'dba3be', 'e5d7a3'],
                nombre: TEXTO_BOTON.HAIR_COLOR.es
            },
            mouth: {
                queryString: 'mouth',
                valores: ['variant01', 'variant02', 'variant03', 'variant04', 'variant05', 'variant06', 'variant07', 'variant08', 'variant09', 'variant10', 'variant11', 'variant12', 'variant13', 'variant14', 'variant15', 'variant16', 'variant17', 'variant18', 'variant19', 'variant20', 'variant21', 'variant22', 'variant23', 'variant24', 'variant25', 'variant26', 'variant27', 'variant28', 'variant29', 'variant30'],
                nombre: TEXTO_BOTON.MOUTH.es
            },
            skinColor: {
                queryString: 'skinColor',
                valores: ['9e5622', '763900', 'ecad80', 'f2d3b1'],
                nombre: TEXTO_BOTON.SKIN_COLOR.es
            }
        }
    }

    return opcionesDiceAvatars;
}


module.exports = obtenerOpcionesAvatars;
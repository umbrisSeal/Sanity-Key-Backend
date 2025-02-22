
const ERROR = {
    es: {
        EMAIL_INCORRECTO: "El email tiene un formato incorrecto.",
        PASSWORD_FORMATO_INCORRECTO: "La contraseña debe de ser de entre 6 y 20 caracteres de longitud y debe tener al menos: 1 letra mayuscula, 1 numero y 1 caracter especial.",
        PASSWORDS_NO_COINCIDEN: "Las contraseñas no coinciden.",
        FORMULARIO_INCORRECTO: "El formulario tiene campos incorrectos.",
        USUARIO_REPETIDO: "Este usuario ya existe.",
        EMAIL_REPETIDO: "El email que intenta registrar ya esta en uso por alguien mas. Por favor, use otro correo electronico.",
        USUARIO_NO_CREADO: "El usuario no pudo ser registrado. Intentelo mas tarde.",
        CSRF_INVALIDO: "El token CSRF esta ausente o es incorrecto.",
        USUARIO_ID_INVALIDO: "El formato del usuario id es incorrecto.",
        USUARIO_NO_EXISTE: "El usuario con el ID especificado no existe.",
        USUARIO_YA_VERIFICADO: "El usuario con el ID especificado ya esta verificado.",
        CODIGO_CADUCADO: "El codigo de verificacion proporcionado ha expirado y la cuenta asociada ya fue borrada. Por favor, cree una nueva cuenta.",
        CODIGO_INCORRECTO: "El codigo de verificacion proporcionado no es correcto. Por favor, verifiquelo.",
        VERIFICACION_FALLIDA: "No se pudo verificar al usuario. Por favor, intentelo mas tarde."
    },
    en: {
        //
    }
}

module.exports = ERROR;
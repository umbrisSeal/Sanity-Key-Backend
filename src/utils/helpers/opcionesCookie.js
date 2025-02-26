
const opcionesCookie = {
    httpOnly: true,
    secure: true,
    sameSite: 'Strict',
    maxAge: (1000 * 60 * 24) * 30
}

module.exports = opcionesCookie

/*
    Cambiar a:
    httpOnly: true
    secure: true
    sameSite: 'Strict'
    
*/

function borrarPerfilView(req, res) {
    res.clearCookie('sessionToken', {path: '/'});
    res.redirect(302, `${process.env.URL_FRONTEND}`);
}

module.exports = borrarPerfilView;
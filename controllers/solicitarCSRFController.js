
function solicitarCSRFController(req, res) {
    const responseBody = {
        csrfToken: `${req.csrfToken()}`,
    }
    res.status(200).json(responseBody);
}

module.exports = solicitarCSRFController;
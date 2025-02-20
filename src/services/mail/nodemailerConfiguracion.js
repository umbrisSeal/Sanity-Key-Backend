const nodemailer = require("nodemailer");

const nodemailerTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: `${process.env.USUARIO_CUENTA_GMAIL}`,
        pass: `${process.env.PASSWORD_CUENTA_GMAIL}`
    }
});
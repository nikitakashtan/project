const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();
// const { User } = require('../../db/models')

const mailRouter = express.Router();

mailRouter.route('/')
.post((req, res) => {
    const { name, email } = req.body;

    const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: 'Приглашение на собеседование',
        text: `Здравствуйте, ${name}. \n\nВы были приглашены на собеседование. Ожидаем скорой встречи с вами.\n\nС уважением,\nHuntFlow`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Возникла ошибка при отправке письма');
        } else {
            res.send('Письмо успешно отправлено');
        }
    });
})

module.exports = mailRouter;
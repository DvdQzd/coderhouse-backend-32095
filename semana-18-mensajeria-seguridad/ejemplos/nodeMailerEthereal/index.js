import { createTransport } from 'nodemailer';

const TEST_MAIL = 'damian44@ethereal.email'

const transporter = createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: TEST_MAIL,
        pass: 'ZF3wecHrZdbGzEe4c8'
    }
});


const mailOptions = {
    from: `Prueba mail personal - ${TEST_MAIL}`,
    to: 'david.quezada.m@gmail.com',
    subject: 'Mail de prueba desde Node.js',
    html: '<h1>Mail de prueba desde Node.js</h1><br><hr><p>Este es un mail de prueba enviado desde Node.js</p>'
}

try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
} catch (error) {
    console.log(error)
}

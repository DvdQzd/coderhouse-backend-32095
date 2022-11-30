import nodemailer from 'nodemailer'

function createSendMail(mailConfig) {

  const transporter = nodemailer.createTransport(mailConfig);

  return function sendMail({ to, subject, text, html }) {
    const mailOptions = { from: mailConfig.auth.user, to, subject, text, html };
    return transporter.sendMail(mailOptions)
  }
}

function createSendMailEthereal() {
  return createSendMail({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: "damian44@ethereal.email",
      pass: "ZF3wecHrZdbGzEe4c8"
    }
  })
}

const sendMail = createSendMailEthereal()

const cuentaDePrueba = 'david.quezada.m@gmail.com'
const asunto = process.argv[ 2 ] || 'sin asunto'
const mensajeHtml = process.argv[ 3 ] || 'nada para decir'

const info = await sendMail({
  to: cuentaDePrueba,
  subject: asunto,
  html: mensajeHtml
})

console.log(info)
import twilio from 'twilio'

const accountSid = 'AC6b0bb96ab3511b651209a5af593a8e61'
const authToken = '87ba71261f71a215ccdbc11aebe3e38f'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un WSP desde Node.js!',
    mediaUrl: [ 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1025px-Cat03.jpg' ],
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+56995403558'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}

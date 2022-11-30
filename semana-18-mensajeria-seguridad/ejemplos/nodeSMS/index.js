import twilio from 'twilio'

const accountSid = 'AC6b0bb96ab3511b651209a5af593a8e61'
const authToken = '565490444b5f190f4665a8560fe2e8c8'

const client = twilio(accountSid, authToken)

const options = {
    body: 'Hola soy un SMS desde Node.js!',
    from: '+14782495447',
    to: '+56995403558'
}

try {
    const message = await client.messages.create(options)
    console.log(message)
} catch (error) {
    console.log(error)
}

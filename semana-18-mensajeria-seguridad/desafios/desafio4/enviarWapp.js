import twilio from 'twilio'

const accountSid = 'AC6b0bb96ab3511b651209a5af593a8e61'
const authToken = '87ba71261f71a215ccdbc11aebe3e38f'

const client = twilio(accountSid, authToken)

const numero = process.argv[ 2 ]
const mensaje = process.argv[ 3 ]

try {
    const message = await client.messages.create({
        body: mensaje,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${numero}`
    })
    console.log(message.sid)
} catch (error) {
    console.log(error)
}

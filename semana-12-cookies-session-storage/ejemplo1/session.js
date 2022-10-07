const express = require('express')
const session = require('express-session')
const cookieParser = require('cookie-parser')

const app = express()

app.use(session({
  secret: 'shhhhhhhhhhhhhhhhhhhhh',
  resave: false,
  saveUninitialized: false
}))

app.use(cookieParser())

app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req, res) => {
  res.json({ contador: ++contador })
})

app.get('/session', (req, res) => {
    req.session.nombre = "David";
    if(!req.session.contador){
        req.session.contador = 1
    }else{
        req.session.contador++
    }
    res.send({session: req.session, cookies: req.cookies})
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
        res.json({ status: 'Logout ERROR', body: err })
        } else {
        res.send('Logout ok!')
        }
    })
})

app.listen(8080);
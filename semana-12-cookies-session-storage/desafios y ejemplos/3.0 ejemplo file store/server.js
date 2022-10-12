const express = require('express')
const session = require('express-session')
/* ----------------------------------------------------- */
/*           Persistencia por file store                 */
/* ----------------------------------------------------- */
const FileStore = require('session-file-store')(session)
/* ----------------------------------------------------- */

const app = express()
app.use(
  session({
    /* ----------------------------------------------------- */
    /*           Persistencia por file store                 */
    /* ----------------------------------------------------- */
    store: new FileStore({ path: './sesiones', ttl: 300, retries: 0 }),
    /* ----------------------------------------------------- */

    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    // cookie: {
    //     maxAge: 40000
    // }
  })
)

app.get('/', (req, res) => {
  res.send('Servidor express ok!')
})

let contador = 0
app.get('/sin-session', (req, res) => {
  res.send({ contador: ++contador })
})

app.get('/con-session', (req, res) => {
  if (req.session.contador) {
    req.session.contador++
    res.send(`Ud ha visitado el sitio ${req.session.contador} veces.`)
  } else {
    req.session.contador = 1
    res.send('Bienvenido!')
  }
})

app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if (!err) res.send('Logout ok!')
    else res.send({ status: 'Logout ERROR', body: err })
  })
})

app.get('/info', (req, res) => {
  console.log('------------ req.session -------------')
  console.log(req.session)
  console.log('--------------------------------------')

  console.log('----------- req.sessionID ------------')
  console.log(req.sessionID)
  console.log('--------------------------------------')

  console.log('----------- req.cookies ------------')
  console.log(req.cookies)
  console.log('--------------------------------------')

  console.log('---------- req.sessionStore ----------')
  console.log(req.sessionStore)
  console.log('--------------------------------------')

  res.send('Send info ok!')
})

const PORT = 8080
app.listen(PORT, () => {
  console.log(`Servidor express escuchando en el puerto ${PORT}`)
})

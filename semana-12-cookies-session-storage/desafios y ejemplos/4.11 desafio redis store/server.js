const express = require('express')
const session = require('express-session')
const redis = require('redis')
const RedisStore = require('connect-redis')(session)

const client = redis.createClient()

const app = express()

app.use(session({
    store: new RedisStore({
        host: 'redis-local',
        port: 6379,
        client: client,
        ttl: 60
    }),
    secret: 'shhhhhhhhhhhhhhhhhhhhh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}))

const getNombreSession = req => req.session.nombre ? req.session.nombre : ''

app.get('/', (req, res) => {
    if (req.session.contador) {
        req.session.contador++
        res.send(`${getNombreSession(req)} visitaste la página ${req.session.contador} veces.`)
    } else {
        let { nombre } = req.query
        req.session.nombre = nombre
        req.session.contador = 1
        res.send(`Te damos la bienvenida ${getNombreSession(req)}`)
    }
})

app.get('/olvidar', (req, res) => {
    let nombre = getNombreSession(req)
    req.session.destroy(err => {
        if (!err) res.send(`Hasta luego ${nombre}`)
        else res.send({ error: 'olvidar', body: err })
    })
})

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`)
})
server.on("error", error => console.log(`Error en servidor: ${error}`))

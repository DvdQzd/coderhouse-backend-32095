const express = require('express')

const app = express()

app.set('view engine', 'pug');

app.get('/datos', (req, res) => {
    res.render('nivel', req.query);
});

const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))

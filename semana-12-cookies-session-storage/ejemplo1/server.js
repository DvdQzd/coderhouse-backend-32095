const express = require('express')
const cookieParser = require('cookie-parser')

const app = express()

app.use(cookieParser('secret'))

app.get('/set', (req, res) => {
  res.cookie('regular', { nuevo: "objeto" }).send('Set Cookie')
});

app.get('/setEx', (req, res) => {
    res.cookie('cookieCon', 'expiracion', { maxAge: 30000 }).send('Set Cookie con expiracion')
})

app.get('/getCookies', (req, res) => {
    res.send(req.cookies)
});

app.get('/getWithSignedCookies', (req, res) => {
    res.send({cookies: req.cookies, signedCookies: req.signedCookies})
})

app.get('/setSigned', (req, res) => {
    res.cookie('signedCookie', "banana", { signed: true }).send('Set Cookie')
  });
// s%3Abanana.Zv%2B449Ca5opbXLRqtKt1VWsGQoUoVo0%2FTS5iOm5UsTo

app.get('/clear', (req, res) => {
    res.clearCookie('regular').send('Cookie borrada');
});

app.listen(3000, () => console.log('Server running on port 3000'));
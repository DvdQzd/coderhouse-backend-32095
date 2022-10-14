const mongoose = require('mongoose');

var baseDeDatosConectada = false;

function conectarDB(url, cb) {
  mongoose.connect(url, {
    serverSelectionTimeoutMS: 3000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    authSource: "admin",
    auth: {
      username: 'david',
      password: 'QZTWd7Stva2f4fCg'
    }
  }, err => {
    if (!err) {
      baseDeDatosConectada = true;
    }
    if (cb != null) {
      cb(err);
    }
  });
}

module.exports = {
  conectarDB
}

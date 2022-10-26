// console.log('hola')

// console.log(process.argv)

// // argumentos de la linea de comandos

// console.log(process.argv.slice(2))

// console.log('Variables de entorno: ', process.env)

// // hola mundo

// console.log(`Hola ${process.env.HOLA}`)

const { exec } = require('child_process');

exec('ls -lh', (err, stdout, stderr) => {
    if (err) {
        console.error('hay un error:', err);
        return;
    }
    console.log(stdout);
});

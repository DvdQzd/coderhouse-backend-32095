const parseArgs = require('minimist')

const opciones = {
    alias: {
        p: 'puerto'
    },
    default: {
        puerto: 3000
    }
};

const args = parseArgs(process.argv.slice(2), opciones);

console.log(args)

const { d, puerto, colores } = args;

console.log(`Escuchando en el puerto ${puerto}`)

console.log(d, puerto);

console.log({colores});
if(colores){
    console.log('colores activado')
} else {
    console.log('colores desactivado')
}


console.log(parseArgs(['1', '2', '3', '4']));
// { _: [ 1, 2, 3, 4 ] }
console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']));
// { _: [ 3, 4 ], a: 1, b: 2 }
console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']));
// { _: [ 3, 4 ], n1: 1, n2: 2 }
console.log(parseArgs(['-a', '1', '-b', '2', '--colores', '--cursiva']));
// { _: [], a: 1, b: 2, colores: true, cursiva: true }
console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-x']));
// { _: [], a: 1, b: 2, c: true, x: true }

const options = {
    default: {
        nombre: 'pepe',
        apellido: 'copado'
    }
}

console.log(parseArgs(['-a', '1', '-b', '2', 'un-valor-suelto', '--nombre', 'juanita'], options));

// {
//     _: [ 'un-valor-suelto' ],
//     a: 1,
//     b: 2,
//     nombre: 'juanita',
//     apellido: 'copado'
// }

const options2 = { alias: { a: 'campoA', b: 'campoB', } }

console.log(parseArgs(['-a', '1', '-b', '2'], options2));
// { _: [], a: 1, campoA: 1, b: 2, campoB: 2 }
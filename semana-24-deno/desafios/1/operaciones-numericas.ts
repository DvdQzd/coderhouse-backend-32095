const numeros = Deno.args.map((numero) => parseInt(numero));
const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);

const minimo = Math.min(...numeros);

const maximo = Math.max(...numeros);

const promedio = suma / numeros.length;

const texto = `************************************
Números: ${numeros.join(", ")}
Mínimo: ${minimo}
Máximo: ${maximo}
Promedio: ${promedio}
************************************`;

await Deno.writeTextFile("resultados.dat", texto);

console.log(`%c${texto}`, 
"color: yellow; background-color: white; font-weight: bold",);


await Deno.writeFile('texto.txt', new TextEncoder().encode('Hola Deno!'));

const texto = await Deno.readTextFile('texto.txt');

console.log(texto);
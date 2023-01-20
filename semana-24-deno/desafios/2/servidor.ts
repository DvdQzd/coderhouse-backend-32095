import { serve } from "https://deno.land/std@0.173.0/http/server.ts";

const port = 8080;

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  const params = new URLSearchParams(url.search);
  const frase = params.get("frase");
  const fraseInvertida = frase?.split(" ").reverse().join(" ");
  return new Response(fraseInvertida);
};

console.log(`Servidor HTTP corriendo. Accede a el en: http://localhost:8080/`);
await serve(handler, { port });

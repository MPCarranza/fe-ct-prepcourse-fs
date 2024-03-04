function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
  // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
  // [PISTA]: "arguments" es un arreglo.
  // Tu código:
  let arrayDeArgumentos = Array.from(arguments);
  let producto = arrayDeArgumentos.length > 0 ? arrayDeArgumentos.reduce((acumulador, elemento) => acumulador * elemento, 1) : 0;
  return producto;

}

module.exports = multiplicarArgumentos;

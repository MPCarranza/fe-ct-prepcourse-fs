function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:
    // Genera un índice aleatorio entre 0 y la longitud del arreglo menos 1
  let indiceAleatorio = Math.floor(Math.random() * array.length);
  // Retorna el elemento en el índice aleatorio
  return array[indiceAleatorio];
} 

module.exports = obtenerElementoAleatorio;

function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length === 0) {
    return null; // Retorna null si el array está vacío
  }

  let numeroFaltante = null;
  const max = Math.max(...numeros);

  for (let i = 1; i <= max; i++) {
    if (!numeros.includes(i)) {
      numeroFaltante = i;
      break; // Termina la iteración tan pronto como se encuentra el número faltante
    }
  }

  return numeroFaltante;
}

// Ejemplo de uso:
const array = [1, 2, 3, 5];
console.log(encontrarNumeroFaltante(array)); // Debería imprimir: 4


module.exports = encontrarNumeroFaltante;
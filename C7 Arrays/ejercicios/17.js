function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let sumatoria = arrayOfNums.reduce ((acumulador, elementos) => acumulador + elementos);
  return sumatoria;
}

module.exports = agregarNumeros;

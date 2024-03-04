function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let mayus = []
  array.map ((elemento) => mayus.push (elemento.toUpperCase()))
  return mayus;
}

module.exports = convertirStringAMayusculas;

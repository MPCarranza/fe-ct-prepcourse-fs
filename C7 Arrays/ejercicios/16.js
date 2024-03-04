function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  let newArr = []
 array.forEach((item, index) => newArr.push (item * index));
  return newArr;
  };


module.exports = multiplicarElementosPorIndice;

function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:
  let arr = []
  array.map ((elemento) => arr.push (elemento * 2), 1);
  return arr;
}

module.exports = duplicarElementos;

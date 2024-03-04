function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
 let elementosMay10 = array.filter(element => {return element > 10}); // filtro elementos
 return elementosMay10.length; // cuento elementos
}

module.exports = contarElementosMayoresA10;

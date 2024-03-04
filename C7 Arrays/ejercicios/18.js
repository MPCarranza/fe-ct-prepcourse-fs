function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let sumatoria = resultadosTest.reduce ((acumulador, elemento) => acumulador + elemento);
  let promedio  = sumatoria / resultadosTest.length;
  return promedio;
}

module.exports = promedioResultadosTest;

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole por valores los números num1 y num2.
  // Tu código:

 return cb(num1, num2);
}

function cb (num1, num2) {
  return num1 + num2;
}

console.log(operacionMatematica(3, 4, cb)); // Debería imprimir 7

module.exports = operacionMatematica;

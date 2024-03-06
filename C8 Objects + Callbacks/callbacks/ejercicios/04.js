function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:
   var sumatoria = arrayOfNumbers.reduce ((acumulador, elemento) => acumulador + elemento, 0);
   cb (sumatoria);
}


module.exports = sumarArray;

function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
    if (numero < 1) {
      return false; // Los números negativos y el 0 no son potencias de 2
    }
  
    while (numero > 1) {
      if (numero % 2 !== 0) {
        return false; // Si el número no es divisible por 2, no es una potencia de 2
      }
      numero /= 2; // Dividimos el número por 2 en cada iteración
    }
  
    return true; // Si el bucle termina, significa que el número es una potencia de 2
  
}

module.exports = esPotenciaDeDos;

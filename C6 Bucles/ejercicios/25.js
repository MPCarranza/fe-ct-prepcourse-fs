function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:
//Para verificar si un string es un palíndromo, necesitas comparar el string original con su versión invertida y ver si son iguales. 
    // Eliminamos los espacios y convertimos todo a minúsculas para hacer la comparación más sencilla
  const stringSinEspacios = string.toLowerCase().replace(/\s/g, '');
  // Invertimos el string
  const stringInvertido = stringSinEspacios.split('').reverse().join('');
  // Comparamos el string original con su versión invertida
  return stringSinEspacios === stringInvertido;
}
//Esta función elimina los espacios y convierte todo a minúsculas para hacer la comparación más flexible y luego compara el string original con su versión invertida. Si son iguales, retorna true, lo que indica que el string es un palíndromo. Si no son iguales, retorna false.
module.exports = esPalindromo;

function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let result = '';
   let maxLength = Math.max(str1.length, str2.length, str3.length);
   
   for (let i = 0; i < maxLength; i++) {
     if (str1[i]) result += str1[i];
     if (str2[i]) result += str2[i];
     if (str3[i]) result += str3[i];
   }
   
   return result;

} //En este código, str1[i], str2[i] y str3[i] se evalúan como undefined si i excede la longitud de cada cadena. Entonces, cuando verificamos si un carácter no está vacío, efectivamente estamos comprobando si la cadena tiene un carácter en esa posición específica.
console.log (combine("hola", "pili", "carranza"));
module.exports = combine;

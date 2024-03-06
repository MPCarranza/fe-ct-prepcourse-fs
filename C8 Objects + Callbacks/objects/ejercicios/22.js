function esAnagrama(str1, str2) {
   // La función recibe dos argumentos "str1" y "str2" que son strings.
   // Determina si los dos strings son anagramas.
   // Devuelve true de ser así, sino retorna false.
   // IMPORTANTE: Un anagrama es una palabra que se forma
   // con las mismas letras que otra, pero en orden diferente.
   // Tu código:
    // Verificar si las longitudes son diferentes
 // Convertir ambas cadenas a minúsculas
 const lowerStr1 = str1.toLowerCase();
 const lowerStr2 = str2.toLowerCase();

 // Verificar si las longitudes son diferentes
 if (lowerStr1.length !== lowerStr2.length) {
   return false;
 }

 // Convertir las cadenas en arrays, ordenarlas y convertirlas de nuevo en cadenas
 const sortedStr1 = lowerStr1.split('').sort().join('');
 const sortedStr2 = lowerStr2.split('').sort().join('');

 // Comparar las cadenas ordenadas
 if (sortedStr1 === sortedStr2) {
   return true;
 } else {
   return false;
 }
}

module.exports = esAnagrama;

function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   
   // Convertir el string en un arreglo de caracteres
      let arrayCaracteres = texto.split('');
      
      // Invertir el arreglo de caracteres
      let arrayInvertido = arrayCaracteres.reverse();
   
      // Unir los caracteres invertidos en un nuevo string
      let stringInvertido = arrayInvertido.join('');
      
      return stringInvertido;
   }

module.exports = invertirTexto;

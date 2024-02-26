/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arregloDeArreglos = []                             // NOMBRE DE LA MATRIZ

   for( let clave in objeto) {
     if (objeto.hasOwnProperty(clave)) {
      nuevoArregloDosElementos = [clave, objeto[clave]]  // ASÍ SE CREA LA ESTRUCTURA DE UNA MATRIZ
      arregloDeArreglos.push (nuevoArregloDosElementos); 
     }
   }
   return arregloDeArreglos;                              // DAME MI MATRIZ
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
      var contador = {};
   
      // Dividir el string en caracteres individuales
      var stringSeparado = string.toString().split("");      //el split("") va sin espacios en el medio!
   
      // Contar la frecuencia de cada letra
      stringSeparado.forEach(letra => {
         if (contador[letra]) {
            contador[letra]++;
         } else {
            contador[letra] = 1;
         }
      });
   
      // Ordenar el objeto por las claves (letras) en orden alfabético
      var contadorOrdenado = {};
      Object.keys(contador).sort().forEach(letra => {
         contadorOrdenado[letra] = contador[letra];
      });
   
      return contadorOrdenado;
} // El forEach no ejecuta cambios ACORDATE. Si lo recorre posibilitando ver o conocer algo.
// Primero, usamos Object.keys(contador) para obtener un arreglo con las claves (letras) del objeto contador.
//  Luego, utilizamos el método sort() para ordenar este arreglo alfabéticamente.
//  Después, iteramos sobre este arreglo ordenado usando forEach().
//  Dentro del bucle forEach(), para cada letra en el arreglo ordenado, 
//asignamos al objeto contadorOrdenado una propiedad con la letra como clave y su valor correspondiente del objeto contador.
//  Finalmente, devolvemos el objeto contadorOrdenado, que contiene las letras ordenadas alfabéticamente junto con sus conteos correspondientes.
// En resumen, lo que hicimos fue ordenar alfabéticamente las claves (letras) del objeto contador y crear un nuevo objeto contadorOrdenado
//que contiene estas letras ordenadas junto con sus respectivos conteos. Esto nos permite cumplir con el requisito de devolver un objeto donde las letras estén ordenadas alfabéticamente.

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var mayusculas = ""; // Aquí almacenaremos las letras mayúsculas
    var minusculas = ""; // Aquí almacenaremos las letras minúsculas

    // Recorremos el string para separar las letras mayúsculas y minúsculas
    for (var i = 0; i < string.length; i++) {
        var letra = string.charAt(i); // Obtenemos la letra en la posición i

        // Verificamos si la letra es mayúscula
        if (letra === letra.toUpperCase()) {
            mayusculas += letra; // Si es mayúscula, la agregamos a la cadena de mayúsculas
        } else {
            minusculas += letra; // Si es minúscula, la agregamos a la cadena de minúsculas
        }
    }

    // Retornamos las letras mayúsculas seguidas de las minúsculas
    return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" "); // Dividimos la frase en palabras
   for (var i = 0; i < palabras.length; i++) {
      palabras[i] = palabras[i].split("").reverse().join(""); // Invertimos cada palabra
   }
   return palabras.join(" "); // Unimos las palabras invertidas en un nuevo string
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
       // Convertimos el número a string para poder invertirlo más fácilmente
       var numeroStr = numero.toString();
    
       // Invertimos el número convirtiendo el string a un array, invirtiéndolo y luego uniéndolo nuevamente en un string
       var numeroInvertido = numeroStr.split('').reverse().join('');
       
       // Verificamos si el número original es igual al número invertido
       if (numeroStr === numeroInvertido) {
           return "Es capicua";
       } else {
           return "No es capicua";
       }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return string.replace(/[abc]/g, ""); // Las barras se utilizan para delimitar la búsqueda del patrón de letras [abc] 
} //de la expresión regular.  g significa global, con lo cual la expresión regular buscará las coincidencia es todo el texto.

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
      // Utilizamos el método sort() con una función de comparación personalizada
      return arrayOfStrings.sort(function(a, b) {
          // Comparamos la longitud de las cadenas a y b
          // Si a es más corta que b, a debe ir antes en el arreglo resultante
          // Si a es más larga que b, a debe ir después en el arreglo resultante
          return a.length - b.length;
      });
  }

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
      // Filtramos los elementos de array1 que están presentes en array2
      return array1.filter(element => array2.includes(element));
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

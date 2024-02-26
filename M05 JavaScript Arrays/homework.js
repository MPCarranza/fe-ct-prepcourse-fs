// /*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array [0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return (array.length);
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var incrementarPorUno = array.map ((num) => {return num + 1});
   return (incrementarPorUno);
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
    array.push (elemento);
   return (array);
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift (elemento);
   return (array);
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   return (palabras.join (' '));
   
   
} 

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   // MI ERROR: return arrayContiene.includes (elemento);
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var sumarElementos = arrayOfNums.reduce((acumulador, elemento) => acumulador + elemento, 0);
   return (sumarElementos);

}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var sumatoriaDeLasNotas = resultadosTest.reduce((acumulador, elemento) => acumulador + elemento, 0);
   for (var i = 0; i <resultadosTest.length; i++) {
      return (sumatoriaDeLasNotas / resultadosTest.length);
   }
   
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   //for (let i=0; i<arrayOfNums.length; i++)
    return (Math.max(...arrayOfNums));
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   let arrayDeArguments = Array.from(arguments);
   let producto = arrayDeArguments.length > 0 ? arrayDeArguments.reduce((acumulador, numero) => acumulador * numero, 1) : 0;

   return (producto);
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var elementosMayores18 = array.filter (element => {return element > 18});
      return (elementosMayores18.length);
      
   
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if (numeroDeDia === 1 || numeroDeDia === 7) {
      return ("Es fin de semana");
      }   else {
         return ("Es dia laboral");
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
  let numComoString = num.toString();
   return numComoString[0] === '9';
//    if (num.toString()[0] === '9') {
//       return true;
//   } else {
//       return false;
//   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   let sonIguales = array.every(elemento => elemento === array[0]);
   return (sonIguales);
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   
   let newArr = [];
   
    for (let i = 0; i < array.length; i++) {
      if (array [i] === "Enero" || array [i] === "Marzo" || array [i] === "Noviembre") {
         newArr.push(array[i]);
      }
   }
   if (newArr.length != 3) { 
      return "No se encontraron los meses pedidos"
   } else {
      return newArr;
   }
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   let resultados = [];

   for (let i = 0; i <= 10; i++) {
      resultados.push(6 * i);
   }

   return resultados;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
      let mayoresACien = [];
   
      for (let i = 0; i < array.length; i++) {
         if (array[i] > 100) {
            mayoresACien.push(array[i]);
         }
      }
   
      return mayoresACien;
   
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código: 
      var nuevosValores =[];
      for (let i = 0; i < 10 ; i++) {
         nuevosValores.push(num +=2); {
         if (num === i)
          {break}
      }
   }
      if (nuevosValores.length < 10) {
         return "Se interrumpió la ejecución"
      }
       return nuevosValores;  
   }

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
      let unArray = [];                 //Declaraste un array vacío unArray donde almacenar los nuevos valores.
      for (i = 0; i < 10; i++) {        // Utilizaste un bucle for que itera 10 veces.      
          if (i === 5) {                // Dentro del bucle, utilizaste una condición if para verificar si el índice i es igual a 5. 
              continue;                 // Si es así, utilizaste continue para saltar esa iteración sin realizar la suma adicional.
          }
          unArray.push(num +=2);       // Si i no es igual a 5, añadiste el número aumentado en 2 al array unArray utilizando unArray.push(num += 2).
      }
      return unArray;                  //Finalmente, retornaste el array unArray que contiene los nuevos valores.
  }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

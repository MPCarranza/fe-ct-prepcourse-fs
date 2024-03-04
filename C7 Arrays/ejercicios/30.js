function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Creamos un objeto para almacenar los elementos que hemos encontrado
 
    const contador = {};
  
    // Utilizamos el método find para buscar el primer elemento repetido
    const elementoRepetido = numeros.find(numero => {
      // Si el contador del elemento actual es igual a 1, significa que ya lo hemos visto antes
      if (contador[numero] === 1) {
        return true; // Retornamos true para indicar que hemos encontrado un elemento repetido
      } else {
        // Si no lo hemos visto antes, incrementamos su contador
        contador[numero] = (contador[numero] || 0) + 1;
        return false; // Retornamos false para continuar buscando
      }
    });
  
    // Retornamos el elemento repetido encontrado o null si no hay ninguno
    return elementoRepetido || null;
  }
module.exports = encontrarElementoRepetido;
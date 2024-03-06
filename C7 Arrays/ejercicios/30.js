function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  // Creamos un objeto para almacenar los elementos que hemos encontrado
 
    const numerosVistos = {};
  
    for(let i = 0 ; i < numeros.length ; i++) {
      const numero = numeros [i]
      if (numerosVistos [numero]){
        return numero;
      } else {
        numerosVistos [numero] = true;
      }

    }
  }
module.exports = encontrarElementoRepetido;
function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:

    // Si el arreglo está vacío, todos los elementos son iguales por defecto
    if (array.length === 0) {
      return true;
    }
    
    // Iteramos a través del arreglo, empezando desde el segundo elemento
    for (let i = 1; i < array.length; i++) {
      // Si encontramos un elemento que no es igual al primero, retornamos false
      if (array[i] !== array[0]) {
        return false;
      }
    }
    
    // Si llegamos hasta aquí, significa que todos los elementos son iguales
    return true;
  
}

module.exports = todosIguales;

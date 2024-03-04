function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let newArr = []
  for (i=0; i< array.length; i++) {
    if (array[i] === "Marzo" || array[i] === "Enero" || array[i] === "Noviembre") {
      newArr.push(array[i]);
    } 
    } if (newArr.length !== 3){
      return "No se encontraron los meses pedidos";
    }
   return newArr;
}

module.exports = mesesDelAño;

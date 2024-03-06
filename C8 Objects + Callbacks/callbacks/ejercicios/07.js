function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   newArr = arrayOfStrings.filter ((str) => {return (str[0] === "a")});
   return newArr;
}

module.exports = filter;

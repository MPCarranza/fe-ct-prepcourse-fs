function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:
  // Verifica si el argumento es un array y si tiene al menos un elemento.
  return Array.isArray(arr) && arr.includes(arr[0]);
}
module.exports = esArrayNoVacio;
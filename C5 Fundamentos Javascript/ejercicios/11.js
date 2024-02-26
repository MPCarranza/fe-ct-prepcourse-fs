function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:
  var year = new Date().getFullYear(); // Obtiene el año actual correctamente
  var añoNacimiento = fechaNacimiento.getFullYear(); // Obtiene el año de nacimiento
  var edad = year - añoNacimiento; // Calcula la edad
  return edad >= 18; // Verifica si la edad es 18 o más
}

module.exports = esMayorDeEdad;
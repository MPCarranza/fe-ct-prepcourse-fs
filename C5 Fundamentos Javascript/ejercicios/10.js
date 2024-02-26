function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
    // Convertimos la cadena de fecha en un objeto Date
    var dateObject = new Date(fecha);
  
    // Verificamos si la fecha es válida
    // Para esto, comprobamos si el objeto Date ha sido creado correctamente
    // y si la fecha obtenida es igual a la fecha original
    // Esto ayuda a manejar casos como "31 de febrero", que sería convertido a "1 de marzo"
    return !isNaN(dateObject) && dateObject.toISOString().slice(0,10) === fecha;
}

module.exports = esFechaValida;
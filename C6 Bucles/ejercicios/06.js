function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  var digitos = num.toString();
  for (let i = 0; i < digitos.length; i++)
  if (digitos.length === 3) {
    return true;
  } else return false;
}

module.exports = tieneTresDigitos;

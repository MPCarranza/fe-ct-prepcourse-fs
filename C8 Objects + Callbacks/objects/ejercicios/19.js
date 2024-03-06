function pasarUsuarioAPremium(objetoMuchosUsuarios) {
  // El parámetro "objetoMuchosUsuarios" es un arreglo de objetos (usuarios).
  // Cada usuario tiene una propiedad llamada "esPremium".
  // Define esta propiedad de todos los usuarios como true.
  // Retornar el arreglo.
  // Tu código:
  
 // Iteramos sobre cada usuario en el arreglo de usuarios
 for (let i = 0; i < objetoMuchosUsuarios.length; i++) {
  // Establecemos la propiedad "esPremium" de cada usuario como true
  objetoMuchosUsuarios[i].esPremium = true;
}
// Retornamos el arreglo de usuarios actualizado
return objetoMuchosUsuarios;
}


module.exports = pasarUsuarioAPremium;

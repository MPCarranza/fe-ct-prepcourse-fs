function sumarLikesDeUsuario(objetoUsuario) {
  // El parámetro "objetoUsuario" tiene una propiedad llamada "posts" que es un arreglo.
  // Este arreglo contiene objetos (post).
  // Cada post posee una propiedad llamada "likes". Esta propiedad es un número.
  // Debes sumar los likes de todos los post y retornar el resultado.
  // Tu código:
  
    let totalLikes = 0; // Inicializamos una variable para almacenar el total de likes
  
    // Iteramos sobre cada post del usuario
    for (let i = 0; i < objetoUsuario.posts.length; i++) {
      // Sumamos los likes del post actual al total
      totalLikes += objetoUsuario.posts[i].likes;
    }
  
    return totalLikes; // Retornamos el total de likes
  
}

module.exports = sumarLikesDeUsuario;

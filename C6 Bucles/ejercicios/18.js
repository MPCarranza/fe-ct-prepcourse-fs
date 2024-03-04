function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:

    let producto = 1;
    let inicio = Math.min (a, b);
    let final = Math.max (a, b);
    for (let i = inicio; i <= final; i++) {
        producto *=(i);
    } if (producto === -0) {
      return (Math.abs (producto));
    }
    return producto;
        
}
console.log(productoEntreNúmeros(1, 5));
module.exports = productoEntreNúmeros;
function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código: 
    var nuevosValores = []
    for (i=0; num<10 ; i+=2) {
       nuevosValores.push (num);
       if(num===i){
        break;}
        {
        return ("Se interrumpió la ejecución");
        }
}       
       return nuevosValores;
    
 } console.log (breakStatement (2));

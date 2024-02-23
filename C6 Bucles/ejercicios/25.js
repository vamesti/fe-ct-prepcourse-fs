function esPalindromo(string) {
   // La función recibe un argumento "string".
   // Verifica si este string es palíndromo o no.
   // Retorna true si lo es, caso contrario, retorna false.
   // IMPORTANTE: Un palíndromo es una palabra o frase
   // que se lee igual hacia adelante que hacia atrás.
   // Tu código:

   let arrayString = string.split('').reverse()
   let arrayStringReverse = string.split('');

   for (let i = 0; i < arrayStringReverse.length; i++) {
       if(arrayString[i] !== arrayStringReverse[i]){
          return false
       }
      
    }

   return true

}

module.exports = esPalindromo;

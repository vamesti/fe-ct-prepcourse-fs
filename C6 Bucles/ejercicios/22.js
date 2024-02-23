function combine(str1, str2, str3) {
   // Esta función debe combinar de forma alternada cada caracter de cada string.
   // La función recibe 3 argumentos. Solo debe contabilizar aquellos que NO esten vacíos.
   // Los strings pueden tener cualquier tamaño.
   // EJEMPLOS
   // combine("abc", "", "123") == "a1b2c3"
   // combine("abc", "12345", "") == "a1b2c345"
   // combine("abc", "12345", "67") == "a16b27c345"
   let resultado = '';
   let longitudMaxima = Math.max(str1.length, str2.length, str3.length);

   // Iterar sobre los índices de los caracteres
   for (let i = 0; i < longitudMaxima; i++) {
      // Añadir el carácter de str1 si el índice es válido
      if (i < str1.length) {
         resultado += str1[i];
      }
      // Añadir el carácter de str2 si el índice es válido
      if (i < str2.length) {
         resultado += str2[i];
      }
      // Añadir el carácter de str3 si el índice es válido
      if (i < str3.length) {
         resultado += str3[i];
      }
   }

   return resultado;

}

module.exports = combine;

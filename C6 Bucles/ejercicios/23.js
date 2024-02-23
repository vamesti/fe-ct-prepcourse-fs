function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let numero = num;
  let cont = 0;
  do {
    numero += 5
    cont++
  } while ((cont < 8));

  return numero
}

module.exports = doWhile;
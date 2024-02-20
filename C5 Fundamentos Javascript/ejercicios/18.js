function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:

  return (!Number.isInteger(num/2)) ? true : false;

}

module.exports = esImpar;
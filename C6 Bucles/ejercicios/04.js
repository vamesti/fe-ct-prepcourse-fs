function mayoriaDeEdad(edad) {
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:

  const bornDate = new Date(edad).getFullYear
  const acctuallyDate = new Date().getFullYear

  return((acctuallyDate - bornDate) >= 18) ? "Allowed" : "Not allowed"

}

module.exports = mayoriaDeEdad;

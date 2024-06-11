// Condicionales

const disponible = 4000;
const retirar = 200;

const auth = true;

if (auth) {
  // Se cumple la condicion
  console.log("Acceso al sistema..... ");
} else {
  // no se cumple la condicion
  console.log("No tienes permiso, inicia sesion  ");
}

/**
 * > Mayor que
 * < Menor que
 * >= Mayor o igual
 * <= Menor o igual
 * == igual
 * === igual estricto
 * !== Diferente a
 */

if (disponible >= retirar) {
  //se cumple la condicion
  console.log("si puedes retirar");
} else {
  // no se cumple la condicion
  console.log("Saldo insuficiente");
}

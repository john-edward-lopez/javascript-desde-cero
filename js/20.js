//

const saldo = 1000;
const pagar = 1500;
const tarjeta = true;

if (saldo > pagar) {
  console.log("Puedes pagar");
} else if (tarjeta) {
  console.log("puedes pagar con tarjeta");
} else {
  console.log("No no puedes pagar");
}

/**
 * logical Or y  logical And
 * || Or - Al menos uno se cumple
 * && And -  Revisa que todos se cumplan
 */

if (saldo > pagar && tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No no puedes pagar");
}

if (saldo > pagar || tarjeta) {
  console.log("Puedes pagar");
} else {
  console.log("No no puedes pagar");
}

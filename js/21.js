const autenticado = true;
const saldo = 1000;
const pagar = 1500;
const tarjeta = true;

autenticado
  ? console.log("Usuario autenticado ")
  : console.log("No Autenticado, ir a login");

saldo > pagar || tarjeta
  ? console.log("Si puedes pagar ")
  : console.log("No, no puedes pagar");

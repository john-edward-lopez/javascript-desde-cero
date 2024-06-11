//Funciones que retornan valores

const sumar = function (numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
};

const resultado = sumar(10, 10);
sumar(300, 1);

console.info("resultdo funcion Expression - expresion");
console.log(resultado);

///////////////

function sumarD(numero1 = 0, numero2 = 0) {
  return numero1 + numero2;
}

const resultadoD = sumar(101, 10);

console.info("resultdo funcion  de declaracion o declarativa");
console.log(resultadoD);

///////////
console.info("resultado retunr con Arrow function ");
const sumarA = (numero1 = 0, numero2 = 0) => numero1 + numero2;

resultadoA = sumarA(15, 15);

console.log(resultadoA);

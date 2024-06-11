// Tipos de Dato

/*
tipo de datos
 */

// Undefined
let cliente;
console.log(cliente);
console.log(typeof cliente);

// String o Cadenas de Texto
const alumno = "John";
console.log(alumno);
console.log(typeof alumno);

//Number
const numero = 20.2;
const numero2 = 30;
const numero3 = -100;

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof numero3);

//bigInt
const numeroGrande = BigInt(123654895752154545698854254852);
console.log(typeof numeroGrande);

//Boolean
const descuento = true;
const sinDescuento = false;
console.log(typeof descuento);
console.log(typeof sinDescuento);

//Null
const descuento2 = null;
console.log(descuento2);
console.log(typeof descuento2);

//symbol
const primerSymbol = Symbol(30);
const segundoSymbol = Symbol(30);
console.log(primerSymbol == segundoSymbol);
console.log(typeof primerSymbol);

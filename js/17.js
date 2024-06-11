const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];
const numeros = [10, 20, 30];

//Filter

const nuevoArray = tecnologias.filter((tech) => tech !== "HTML");

console.log(nuevoArray);

const resultado = numeros.filter((numero) => numero !== 10);

console.log(resultado);

//includes

const resultado2 = tecnologias.includes("CSS");

console.log(resultado2);

//some  - Devuelve si al menos uno cumple la condicion

const resultadoS = numeros.some((numero) => numero > 15);

if (resultadoS) {
  console.log("Si hay elementos ");
} else {
  console.log("no hay elementos");
}

//Find - Deveulve el primer elemento que cumple una condicion
const resultadoF = numeros.find((numero) => numero > 20);

console.log(resultadoF);

//Every - Retorna true  o false si todos cumplen la condicion

const resultadoE = numeros.every((numero) => numero > 5);

console.log(resultadoE);

//Reduce - retorna un acumulado del total

const resultadoR = numeros.reduce((total, numero) => {
  console.log(total);
  console.log(numero);

  return total + numero;
}, 0);

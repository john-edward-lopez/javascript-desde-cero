// iterar array o arreglos con for , forEach , map

const tecnologias = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Nest.js",
];

// iterando con console.log  no es una forma carrecta

/*console.log(tecnologias[0]);
console.log(tecnologias[1]);
console.log(tecnologias[2]);
console.log(tecnologias[3]);
console.log(tecnologias[4]);*/

// iterando de forma correcta con for
console.info("resuntado del for");
for (let i = 0; i < tecnologias.length; i++) {
  console.group("for");
  console.log(tecnologias[i]);
  console.groupEnd("for");
}

console.info("resuntado del forEach");
//Foreach :

tecnologias.forEach(function (items) {
  console.group("forEach");
  console.log(items);
  console.groupEnd("forEach");
});

//iterando con map crea un nuevo arreglo

//map
console.info("resuntado del map");
const arrayMap = tecnologias.map(function (tech) {
  return tech;
});

console.group("map");
console.log(arrayMap);
console.groupEnd("map");

//for ... of
console.info("resuntado del for ... of");

for (let tech of tecnologias) {
  console.group("for ... of");
  console.log(tech);
  console.groupEnd("for ... of");
}

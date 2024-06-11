//

const tecnologias = ["HTML", "CSS", "JavaScript", "React.js", "Node.js"];

//modificar elementos de un arreglo o array

//tecnologias[5] = "Nest.js";

//metodos de array

//agregar lementos a un arreglo

tecnologias.push("Nest.js");
console.table(tecnologias);

const nuevoArreglo = [...tecnologias, "Next.js"];
console.table(nuevoArreglo);

//Eliminar el primer elemento del arreglo
tecnologias.shift();

console.table(tecnologias);
// sin mutarlo : Eliminar el SEGUNDO elemento del arreglo
tecnologias2 = tecnologias.filter(function (tech) {
  if (tech !== "CSS") {
    return tech;
  }
});
console.log(tecnologias2);

tecnologias2 = tecnologias.map(function (tech) {
  if (tech === "Node.js") {
    return "Next.js";
  } else {
    return tech;
  }
});
console.log(tecnologias2);

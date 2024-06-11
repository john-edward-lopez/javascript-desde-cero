// Manipular  elementos HTML con css

const heading = document.querySelector(".heading");
const enlaces = document.querySelectorAll(".navegacion a");

console.log((heading.textContent = "Un nuevo heading.."));

heading.id = "Un nuevo ID";

heading.removeAttribute("id");

const inputNombre = document.querySelector("#nombre");

inputNombre.value = " un nuevo valor ";

console.log(inputNombre.classList);

console.log(enlaces);
enlaces[0].textContent = " Nuevo enlace ";

enlaces.forEach((enlace) => (enlace.textContent = "nuevo elace"));

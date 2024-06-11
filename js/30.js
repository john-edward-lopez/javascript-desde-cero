//Eventos del Dom - Click

const heading = document.querySelector(".heading");

const enlaces = document.querySelectorAll(".navegacion a");

heading.addEventListener("mouseenter", () => {
  heading.textContent = "entraando";
});
4;

heading.addEventListener("mouseleave", () => {
  heading.textContent = "Saliendo ";
});

enlaces.forEach((enlace) => {
  enlace.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("diste click en un enlace..");
  });
});

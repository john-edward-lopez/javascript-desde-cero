//Optional chaining (?)

const alumno = {
  nombre: "juan",
  clase: "Porogramacion 1",
  aprobado: true,
  examenes: {
    examen1: 90,
  },
};

console.log(alumno.examenes?.examen1);

//Nullish coolescing operator(??)

const pagina = null ?? 1;

console.groupCollapsed(pagina);

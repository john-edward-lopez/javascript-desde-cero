//Objetos

const producto = {
  nombre: "Table",
  precio: 300,
  disponible: false,
};

console.log(producto);
console.log(typeof producto);
//console.table(producto);

console.log(producto.nombre);
console.log(producto.precio);
console.log(producto.disponible);

//Destructuring
const { nombre, precio, disponible } = producto;

console.log(nombre);
console.log(precio);
console.log(disponible);

//Object literal Enhacement
const autenticado = true;
const usuario = "John";

const nuevoObjeto = {
  autenticado,
  usuario,
};

console.log(nuevoObjeto);

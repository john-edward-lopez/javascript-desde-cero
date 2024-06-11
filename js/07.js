const producto = {
  nombre: "Table",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "John",
  disponible: true,
};

//unir la informacion de un obejeto a otro objeto
const carrito = {
  cantidad: 1,
  ...producto, //spread operator
};

console.log(carrito);

const nuevoObjeto = {
  ...producto,
  ...cliente,
};

console.log(nuevoObjeto);

const nuevoObjeto2 = Object.assign(producto, cliente);
console.log(nuevoObjeto2);

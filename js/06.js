//Objetos - Destructuring de dos o mas objetos

const producto = {
  nombre: "Table",
  precio: 300,
  disponible: false,
};

const cliente = {
  nombre: "John",
  disponible: true,
  direccion: {
    calle: "Calle Mexico",
  },
};

const { nombre } = producto;
const {
  nombre: nombreCliente,
  direccion: { calle },
} = cliente;

console.log(nombre);
console.log(nombreCliente);
console.log(calle);

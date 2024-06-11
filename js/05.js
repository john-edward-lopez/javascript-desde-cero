//Objetos Manipulacion

const producto = {
  nombre: "Table",
  precio: 300,
  disponible: false,
};

//bloquear  objeto para que no pueden modificarlo
Object.freeze(producto);

//permitir modificar propiedades existentes pero no agregar
Object.seal(producto);

//modifica valor de la llave disponible
producto.disponible = true;

// agregar propiedad cuando no existe
producto.imagen = "imagen.jpg";

//Eliminar propiedad
delete producto.precio;

console.log(producto);

// Objetos

/* const nombreProducto = "Monitor de 30\""
const precio = 300
const disponible = true; */

// Ahora creamos el objeto con varias varibles
const producto = {
    nombreProducto: "Monitor de 42 pulgadas",
    precio: 450,
    disponible: true
}
/* Accedemos a las siguientes propiedades */
console.log(producto.precio);
/* Tambien accedemos de esta forma */
console.log(producto["precio"]);
/* Agregar nuevas propiedades */
producto.imagen = "imagen.jpg"
// Eliminar propiedades
delete producto.disponible


console.log(producto);
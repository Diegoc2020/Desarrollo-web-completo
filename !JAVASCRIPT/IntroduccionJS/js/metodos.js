// // MEtodos
// "use strict"/* HAcemos correr de modo estricto */
// const producto = {
//     nombreProducto: "Monitor de 30 pulgadas",
//     precio: 450,
//     disponible: true
// }

// Object.freeze(producto)/* Congelamos el Objeto para que no se modifique */
// Object.seal(producto)/* Seal Si permite modificar, pero no agregar o eliminar */
// producto.precio = 600
// // producto.imagen="imagen.jpg"
// console.log(Object.isFrozen(producto));/* Devuele un valor Boolean true or false*/

// /* -_-_--______-------_-_-_-----_-_-_-_-_- */

/* Unir Objetos */
const producto = {
    nombreProducto: "Monitor de 30 pulgadas",
    precio: 450,
    disponible: true
}
const medidas = {
    peso: "1kg",
    medida: "1m"
}
/* Rest Operator */
const nuevoProducto = { ...producto, ...medidas }

console.log(producto);
console.log(nuevoProducto);
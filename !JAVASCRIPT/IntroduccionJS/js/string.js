// Strings o cadenas de texto
const producto = 'Monito de 20 pulgadas\"'
const producto2 = String("Monitor de 30 pulgadas") /* Tambien Funciona asi */
const producto3 = new String("Monitor de 50 pulgadas") /* Tambien Funciona asi */

console.log(producto);
console.log(producto2);
console.log(typeof producto3);/* Con typeof nos permite conocer el tipo de variable */
// ____________________________________________________________________________
// Algunas operaciones con variables string
console.log(producto.length)/* Propiedad Lenght, no es metodo */
console.log(producto2.indexOf('Monitor')); /* Indica la posicion donde encontro el string */
console.log(producto2.indexOf('tablet')); /* como no encontro, entonces en la consola se muestra -1 */
// Includes retorna true or false
console.log(producto2.includes('tablet'));
console.log(producto2.includes('Monitor'));

const nombre = 'Diego'
const email = 'correo@correo.com'

console.log('El nombre es: ' + nombre + ' y su correo es' + email); /* Forma Antigua */
/* AHora usamos template Strings */
console.log(`Nombre del cliente: ${nombre} y su correo es ${email}`);
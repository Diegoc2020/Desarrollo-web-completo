// Arreglos o Arrays


const numeros = [10, 20, 30, 40, 50]

console.log(numeros)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
console.table(meses)
/* Un arreglo puede contener cualquier clase de tipos de variables */

const nuevoArreglo = ['Mes', 200, true, null, [1, 2, 3], { nombre: 'Diego', trabajo: 'Gerente' }]
console.log(nuevoArreglo);

// Acceder a los valores de un arreglo

console.log(numeros[0]);
console.log(numeros[2]);
console.log(numeros[20]);/* Undefined */

// Conocer la extension de un arreglo
console.log(numeros.length);
console.log(meses.length);

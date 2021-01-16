// Arreglos o Arrays


const numeros = [10, 20, 30, 40, 50]

console.log(numeros)

const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
/* Un arreglo puede contener cualquier clase de tipos de variables */

const nuevoArreglo = ['Mes', 200, true, null, [1, 2, 3], { nombre: 'Diego', trabajo: 'Gerente' }]
// console.log(nuevoArreglo);

// Acceder a los valores de un arreglo

// console.log(numeros[0]);
// console.log(numeros[2]);
// console.log(numeros[20]);/* Undefined */

// Conocer la extension de un arreglo
// console.log(numeros.length);
// console.log(meses.length);
/* --------------------------------------------- */
// Aca podemos imprimir el arreglo varias veces
// numeros.forEach(n => {
//     console.log(numeros);
// });
/* ---------------------------Aca Imprimimos la posicion de cada elemento */
// numeros.forEach(function(numero){
//     console.log(numero);
// });
/* ----------------------- */
/* Agregar elementos al indice */

// numeros[5] = 60
/* Mejor Forma */

// numeros.push(60) /* o */
// numeros.push(70, 80, 90)/* Agrega al final del arreglo */

/* UnShift */
// numeros.unshift(-10, -20, -30)/* Agrega al inicio del arreglo */

// meses.pop()/* Eliminamos el ultimo elemento del arreglo */
// meses.shift()/* Elimina el primer elemento */

// meses.splice(2, 1)/* Recorre el arreglo, llega a la oosicion 2 y borra 1 valor a partir de ahi */

// Esto implica modificar los arreglos originales, ahora exwiste este nuevo enfoque

// Utilizar el rest Operator o Spread Operator

const nuevoMes = [...meses, 'Mayo']
console.log(nuevoMes);
console.table(numeros)
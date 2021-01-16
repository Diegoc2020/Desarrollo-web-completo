const num1 = 20
const num2 = "20"

console.log(parseInt(num2))/* PArseint es una funcion  */
// Ahora los metodos
console.log(num1.toString());/* .string es un metodo */

/* Funciones con parametros y argumentos */

function miFuncion(num1, num2) {/* Num1 y num2 son Parametros dentro del parentesis */
    console.log(num1 + num2)
}
miFuncion(10, 10)/* Argumentos o valores reales */

const miFuncion2 = function (num1, num2) {
    console.log(num1 + num2)
}
miFuncion2()

function miFuncion(num1 = 0, num2 = 0) {/* Parametros por defecto*/
    console.log(num1 + num2)
}
miFuncion(10, 10)/* Argumentos o valores reales */
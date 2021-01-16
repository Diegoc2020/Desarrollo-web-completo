// cuando tenemos un error, todo el codigo siguiente no se ejecuta

const num1 = 2
const num3 = 3

console.log(num1);
// console.log(num2);/* Aca hay error, no existe la variable num2 */

// se utiliza cuando el error puede ser critico, una conexion de base de datos ej

try {
    console.log(num2);      
} catch (error) {
    console.log(error);
}
console.log(num3);
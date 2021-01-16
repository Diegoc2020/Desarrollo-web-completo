// Mas metodos con arreglos
// Arreglo unidimensional
const meses = new Array('Enero', 'Febrero', 'Marzo', 'Abril');
const carrito = [
    { producto: 'Monitor de 30 pulgadas', precio: 300 },
    { producto: 'Television de 50 pulgadas', precio: 500 },
    { producto: 'Tablet', precio: 150 },
    { producto: 'Audifonos', precio: 114 },
    { producto: 'Celular', precio: 355 },
    { producto: 'Equipo de Sonido', precio: 90 },
    { producto: 'Teclado', precio: 45 },
    { producto: 'Laptop', precio: 990 }
]
// For Each Arrow function
// meses.forEach(mes => {
//     console.log(mes);
// });
meses.forEach(function (mes) {
    if (mes == 'Marzo') {
        console.log('MArzo si existe');
    }
});

// Ahora metodo Includes
const resultado = meses.includes('Marzo')
console.log(resultado);

// Some ideal para los arreglos de objetos

let resultado2 = carrito.some(function (producto){
return producto.nombre === 'Celular PRO'
})
console.log(resultado2);
// Reduce
// resultado2 = carrito.reduce(function (total, producto) {
//     return total + producto.precio
// }, 0)

// Sumamos en una variable total, las propiedades de precio producto del array Carrito
// resultado2 = carrito.reduce( (total, producto) => total + producto.precio,0)
// console.log(resultado2);
/* ------------------------------------------------- */


// Filter

// resultado2 = carrito.filter(articulo => articulo.producto > 400)
resultado2 = carrito.filter(function (articulo) {
    return articulo.precio>400
})
resultado2 = carrito.filter(function (articulo) {
    return articulo.producto === 'Celular'
})
resultado2 = carrito.filter(function (articulo) {
    return articulo.producto !== 'Celular'
})


console.log(resultado2);
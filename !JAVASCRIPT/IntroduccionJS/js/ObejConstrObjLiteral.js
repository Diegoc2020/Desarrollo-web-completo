
// const producto = {
//     nombre: 'tablet',
//     precio: 500
// }

// // Object Contructor

// function Producto(nombre, precio) {
//     this.nombre = nombre
//     this.precio= precio
// }

// // asi puedes crear Muchos objetos
// const producto2 = new Producto('Montor de 49 "', 500)
// const prod3=new Producto('Table de 15"', 1200)

// console.log(producto2, prod3);

// Prototypes
function Producto(nombre,precio) {
    this.nombre = nombre
    this.precio=precio
}
// Crear funciones que solo se utilizan en un objeto en especifico.
Producto.prototype.formatearProducto = function () {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`
}

const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('laptop', 300)

console.log(producto2);
console.log(producto3.formatearProducto());

// clases
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    formatearProducto() {
        return `El producto ${this.nombre} tiene un precio de $ ${this.precio}`
    }
}
const producto2 = new Producto('Monitor Curvo de 49"', 800)
const producto3 = new Producto('laptop', 300)


// Herencia
/* ----------------------------------------------------- */
class Libro extends Producto {
    constructor(nombre, precio, isbn) {
        super(nombre, precio)/* Heredamos de la clase padre esos parametros */
        this.isbn = isbn
    }

}
const libro = new Libro('javaScript la revolucion', 120, '91283721312')
console.log(libro.formatearProducto());
console.log(producto2.formatearProducto());

// Objetos
const producto = {
    nombreProducto: "Monitor de 30 pulgadas",
    precio: 450,
    disponible: true
}

const precioProducto = producto.precio
const nombreProducto = producto.nombreProducto

console.log(precioProducto);
console.log(nombreProducto);

// La nueva forma Destructuring de Objetos
// Se crea una variable en la misma linea asignandole propiedades de una vez, al final es el nombre del objeto
const{precio, nombreProducto} = producto;




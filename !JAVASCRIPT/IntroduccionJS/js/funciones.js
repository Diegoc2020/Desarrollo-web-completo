// Funciones: Serie de procedimientos en cualquier lenguaje de programacion, son reutilizables en todo el proyecto

// Declaracion de la función

// Palabra reservada
function miFuncion() {
    console.log(10+10)
}

miFuncion()
// .-----------------------.-.-.-.----------------------------
// Expresion de la funcion

const miFuncion2 = function () {
    console.log(3+3)
}

miFuncion2()

// Muy Importante 
// El concepto de Hoisting fue pensado como una manera general de referirse a cómo funcionan los contextos de ejecución en JavaScript(específicamente las fases de creación y ejecución).Sin embargo, el concepto puede ser un poco confuso al principio.

//     Conceptualmente, por ejemplo, una estricta definición de hoisting sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código, pero esto no es lo que ocurre en realidad.Lo que sucede es que las declaraciones de variables y funciones son asignadas en memoria durante la fase de compilación, pero quedan exactamente en dónde las has escrito en el código.
// ----------------------------------------
// IIFE, previene ser llamada por otros archivos, son autocontenidas
//     (function () {
//     console.log('Esto es una funcion IIFE')
// })()
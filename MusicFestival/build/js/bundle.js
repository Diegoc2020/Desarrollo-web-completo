
document.addEventListener('DOMContentLoaded', function () {
    crearGaleria()
});

function crearGaleria(){
    const galeria = document.querySelector('.galeria-imagenes')

    for (let i = 1; i <= 12; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `build/img/thumb/${i}.webp`
        // Añadir la funcion de mostrar imagen
        imagen.onclick = mostrarImagen;
        imagen.dataset.imagenID = i;

        const lista = document.createElement('li')
        lista.appendChild(imagen)

        galeria.appendChild(lista)
    }
}

function mostrarImagen(e) {
    console.log(e.target);
    const id = parseInt(e.target.dataset.imagenID)/* Convertimos a Entero el valor del Id */
    const imagen = document.createElement('img')
    imagen.src = `build/img/grande/${id}.webp`

    const overlay = document.createElement('div')
    overlay.appendChild(imagen)
    overlay.classList.add('overlay')
    // Cuando se da click en el overlay, cerrar igual la imagen
    overlay.onclick = function () {
        overlay.remove()
    }
    // Boton para cerrar la imagen
    const cerrarImagen = document.createElement('p')
    cerrarImagen.textContent = 'X'
    cerrarImagen.classList.add('btn-cerrar')
    overlay.appendChild(cerrarImagen)
    // Cuando presiona se cierra la imagen
    cerrarImagen.onclick = function () {
        overlay.remove()
    }
    // Mostrar en el Body
    const body = document.querySelector('body')
    body.appendChild(overlay)
    body.classList.add('fijar-body')
}


const miBoton = document.querySelector('#boton')

miBoton.addEventListener('click', () => {
    Notification.requestPermission()
        .then(resultado => console.log(`El resultado es: ${resultado}`))
        
})

if (Notification.permission=='granted') {
    new Notification('Esta es una notificacion', {
        icon: 'img/ccj.png',
        body: 'Codigo Con Juan, los mejores tutoriales'
    })
}
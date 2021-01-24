document.addEventListener('DOMContentLoaded', function () {
    scrollNav()
    navegacionFija()
})

function navegacionFija() {
    const barra = document.querySelector('.header')
    // Registrar la interseccion Server
    const observer = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) {
            barra.classList.remove('fijo')           
        } else {
            console.log('Elemento No Visible');            
            barra.classList.add('fijo')           
            
        }
    })
    // Elemento Observar
    observer.observe(document.querySelector('.info-festival'))
}

function scrollNav() {
    const enlaces = document.querySelectorAll('.navegacion-principal a')

    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function (e) {
            e.preventDefault()

            const seccion = document.querySelector(e.target.attributes.href.value)
            seccion.scrollIntoView({
                behavior: 'smooth'
            })
        })
    });
}
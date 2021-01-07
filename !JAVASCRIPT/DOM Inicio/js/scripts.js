console.log(`1`);

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {

    /* let logo = document.getElementById('logo')
    
    logo.hasAttribute("logo")
    console.log(logo);
    // Contiene 2 valores
    logo.setAttribute('class','nuevaClase')
     */
    /*  var logo = document.querySelector('.logo')
     console.log(logo);
 
     // El query Selector puede traer 2 atributos
     var encabezado = document.querySelectorAll('h2, footer p')
     console.log(encabezado.innerText);
  */
    /* ar enlaces = document.querySelectorAll('a')

    enlaces.forEach(enlace => console.log(enlace.innerText));
 */

    /*  var enlaces = document.querySelectorAll('#menu ul li a')[0]
     console.log(enlaces.nodeType);
     console.log(enlaces.nodeName);
     console.log(enlaces.attributes);
     console.log(enlaces.attributes[0]);
     // Con Comillas
     console.log(enlaces.firstChild);
     // Sin Comillas
     console.log(enlaces.firstChild.nodeValue);
 
     // Ahora podemos modificar luego de conseguir el valor del nodo
     enlaces.firstChild.nodeValue='Home' */


    // Ahora si Creamos Contenido

    var sidebar = document.querySelector('#sidebar')
    console.log(sidebar);
    // Creamos un elemento nuevo de tipo h1
    var nuevoElemento = document.createElement('h1')
    // Opcional el console log
    console.log(nuevoElemento);
    // Ahora Asignamos un texto y se guarda en una variable
    var nuevoTexto=document.createTextNode('Hola Mundo')

    nuevoElemento.appendChild(nuevoTexto)
    sidebar.appendChild(nuevoElemento)

    // Agregando un nuevo enlace 6 al sidebar
    // Primero seleccionamos donde estan los enlaces, en este caso estamos seleccionando del Sidebar y luego la Unsorted List
    var enlacesSidebar = document.querySelectorAll('#sidebar ul')
    // Creando el enlace
    var enlace6 = document.createElement('a')
    enlace6.setAttribute('href', '#')

    // Creamos Una variable a la cual le asignamos Un Texto
    var textoEnlace = document.createTextNode('Entrada 6')
    // Asiganamos al enlace el texto guardado en TextoEnlace
    enlace6.appendChild(textoEnlace)
    // Ahora agreamos una lista donde va a ir el enlace
    var nuevaLista = document.createElement('li')

    // Ahora a la nueva lista agreamos el enlace con todas las propiedades antes asignadas
    nuevaLista.appendChild(enlace6)
    // Ahora los enlaces agregados recientemente , en la posicion 0, agregamos todo el elemento completo.
    enlacesSidebar[0].appendChild(nuevaLista)
    




  })
})()

console.log(`3`);
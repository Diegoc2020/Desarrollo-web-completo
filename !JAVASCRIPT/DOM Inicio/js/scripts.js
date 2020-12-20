console.log(`1`);

(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', function () {
    
    let logo = document.getElementById('logo')
    
    logo.hasAttribute("logo")
    console.log(logo);
    // Contiene 2 valores
    logo.setAttribute('class','nuevaClase')
    


  })
})()

console.log(`3`);
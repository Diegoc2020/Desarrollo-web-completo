const usuarioAutenticado = new Promise((resolve, reject) => {
    const auth = true;
    if (auth) {
        resolve('Usuario Autenticado')/* El promise se cumple */
    } else {
        reject('No se pudo inciar sesion');/* El promise no se cumple */
    }
})

usuarioAutenticado
    .then(function (resultado) {
    console.log(resultado);
    })
    .catch(function (error) {
    console.log(error)
})/* Traemos el mensaje correcto, de lo contrario nos trae todo el metodo como objeto */

/* En los promises existen 3 valores
Pending: No se ha cumplido pero tampoco rechazado
Fullfilled: Ya se cumplio
Rejected: Se ha rechazado o no se pudo cumplir */
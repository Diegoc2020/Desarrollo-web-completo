// Async y await

function descargarNuevosClientes() {
    return new Promise(resolve => {
        console.log('Descargando Clientes... Espere...');

        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000)
  

    })
}
async function app() {
    try {
        const resultado = await descargarNuevosClientes()
        console.log(resultado);
    } catch (error) {
        console.log(error);
    }
}
app()

console.log('algo');

// colocamos un tiempo de espera para mostrar mensaje "Set Timeout"
// setTimeout(function () {
//     console.log('Set Timeout...');
// }, 5000)

// // Repite el mensaje cada tanto tiempo
// setInterval(function () {
//     console.log('Intervalos de tiempo');
// }, 1000)
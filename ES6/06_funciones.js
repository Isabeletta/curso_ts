// funciones anidadas
// Patrón Module



function main() {
    let app = 'Mi aplicación'

    function presentacion() {
        console.log(app)
    }

    presentacion()
}
main()

// Patrón IIAF (Inmediatamente invocada)
// (function () {
//     let app = 'Mi aplicación'

//     function presentacion() {
//         console.log(app)
//     }

//     presentacion()
// })()

// (() => {
//     let app = 'Mi aplicación'

//     function presentacion() {
//         console.log(app)
//     }

//     presentacion()
// })()
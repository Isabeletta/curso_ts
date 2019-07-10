
// Mecanismos para resolver la sincronica

// Callbacks

function leerDatos(callback) {
    setTimeout( () => {
        let data = 'los datos Callbacks'
        // return data
        callback(data)
    }, 1000)
}

function mostrarDatos(datos) {
    console.log(datos)
}

// mostrarDatos(leerDatos()) Esto devuelve undefined

leerDatos(mostrarDatos)

// ES6 Promesas

function leerDatosPromesa() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const n = Math.random() 
            if(n < 0.75) {
                // OK
                resolve(n)
            } else {
                // Error
                reject(new Error(n))
            }
        }, 2000)

    }) 
}

leerDatosPromesa()
    .then( (datos ) => { console.log("Promesas todo ok " + datos)})
    .catch( ( error ) => { console.log("Error Promesas: " + error.message)});


// ES2017 (ES8) async/await

(async function () {
    try {
        const datos = await leerDatosPromesa()
        console.log('await', datos)
    } catch (error) {
        console.log('Error await: ' + error.message)
    }
})()


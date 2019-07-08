function sumaTotal(aDatos = []) {
    // aClone = aDatos.slice()
    let r = 0;
    for(let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i]
        r += item
    }
    return r
}

function sumaTotal2(aDatos = []){
    let r = 0;
    for (const i in aDatos) {        
        const item = aDatos[i];
        r += item        
    }
    return r
}

// ES6: nueva madera de iterar forof
// Da error pq aunq en la definicion pone object, en realidad se refiere a array
// const o = {}
// for (const iterator of o) {
    
// }

function sumaTotalES6(aDatos = []){
    let r = 0;
       
    for (const item of aDatos) {           
        r += item        
    }
    return r
}

const aDatos = [1, 4, 6, 8, 5, 9]
console.log(sumaTotal(aDatos))
console.log(sumaTotal2(aDatos))
console.log(sumaTotalES6(aDatos))


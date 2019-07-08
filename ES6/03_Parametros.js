function sumaBad(a, b) {
    return a + b
}

console.log(sumaBad()) // NaN pq no están definidas las variables

// arguments son todos los argumentos que se le pasa
// el parametro ... convierte en array 
function suma(a = 0, b = 0, ...rest) {
    // console.log(arguments)
    // return a + b
    console.log(rest)
    let r = a + b
    if(rest.length) {
        r += rest.reduce( (a, b) => a + b)
    }
    return r
}

console.log(suma("2", 2))   // 22
console.log(suma()) // 0
console.log(suma(3,5,6,8,9))


const aDatos = [3,5,6,8,9]
// Envia el array conviertiendolo en elementos independientes
// ES& spread operator
console.log(...aDatos)

// destructuring
function algo() {
    let n = 23
    let condicion = true

    return [n, condicion]
}

let [number, cond] = algo()
console.log(number, typeof number)
console.log(cond, typeof cond)


function otra() {
    let n = 23
    let condicion = true

    return {n: n, condicion: condicion}
}

// Aqui (en forma de objeto) si tengo q respetar el nombre, aunque no el orden
let {condicion, n} = otra()
console.log(n, typeof n)
console.log(condicion, typeof condicion)


// Objetos literales (JSON)

const p1 = {
    nombre: 'Pepe',
    edad: 23,
    saludar: function () {
        console.log(`Hola soy ${this.nombre}`)
    }
}
// Lo anterior es lo mismo que: p1 = new Object()

p1.saludar()
console.log(p1.__proto__)
console.log(p1.hasOwnProperty('nombre'))

// Objetos dinámicos
p1.edad = 24
p1.curso = 'TypeScript'
console.log(p1)

delete p1.nombre
console.log(p1)

console.log('**********************************************************')

// Funciones constructoras
// Por convenio: primera en mayuscula y en singular
function Persona(nombre = '', edad = 0) {
    console.log('Ha nacido una persona')
    this.nombre = nombre
    this.edad = edad
    // this.saludar = function(otro = 'amigo') {
    //     console.log(`Hola ${otro} soy ${this.nombre}`)
    // }
}

// Una buena practica para que no se defina tantas funciones como objetos se hayan creado
Persona.prototype.cerebro = true
Persona.prototype.saludar = function(otro = 'amigo') {
    console.log(`Hola ${otro} soy ${this.nombre}`)
}

let p2 = new Persona('Pepe')
let p3 = new Persona('Helena', 34)
console.log(p2)
p2.saludar('Juan')

// Pueden ganar o perder propiedades
p2.trabajo = 'Programador'
delete p2.edad

console.log(p2.constructor)
console.log(p2 instanceof Persona)
console.log(p2 instanceof Object)

console.log(p2.cerebro)
p3.cerebro = false
console.log(p3.cerebro)
// Como su valor de prototipo, ahora la sacaria. Cuando no cambia su valor, no la muestra
console.log(p3)

console.log('**********************************************************')

const aDatos = [1, 2, 3, 4]
console.log(Array.isArray(aDatos))
aDatos.push(8)
console.log(aDatos)

// Se pueden cambiar los prototipos
// Array.prototype.push = () => console.log('Soy un array')
// aDatos.push(9)
// console.log(aDatos)


function Mascota() {
    
}

function Perro() {  // Hija - Heredera de la clase mascota
    
}

Perro.prototype = new Mascota()
Perro.prototype.constructor = Perro
console.log(Perro.prototype.constructor)
// Mascota.prototype.constructor.call(this, parametros)

function Persona() {
    this.mascotas = [new Mascota()] // Asociacion -> propiedad
}

Persona.prototype.comprarMascota = function() {
    this.mascotas.push(new Mascota)  // Dependencias -> metodo
}

Persona.prototype.adoptarMascota(mascota) = function() {
    this.mascotas.push(mascota)  // Inyección de Dependencias -> metodo
}

let p1 = new Persona()
let m1 = new Mascota()
p1.adoptarMascota(m1)


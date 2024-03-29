function Animal(especie = '', nombre) {
    // let especie = pEspecie
    this.nombre = nombre

    const privada = function () {}

    this.getEspecie = function () { return especie}
} 

Animal.prototype.saludar = function () {
    console.log(`Hola soy un ${this.getEspecie()} y me llamo ${this.nombre}`)
}

let perro = new Animal('perro', 'Sultan')
perro.saludar()
console.log(perro.especie)

// ES5 getter y setters: Object Accessors
persona = {
    _nombre : '',
    get nombre()  {return this._nombre.toUpperCase()},
    set nombre(nombre) {this._nombre = nombre.toLowerCase()}
}

persona.nombre = 'Pepe'
// Pero todo esto es mentira pq si haces persona._nombre = 'Ramon' se cambia el valor
console.log(persona.nombre)
// Añaden propiedades y funcionalidades a las clases
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(derivedCtor.prototype, name, Object.getOwnPropertyDescriptor(baseCtor.prototype, name));
        });
    });
}
class Persona {
    saludar() {
        console.log(`Hola soy ${this.name}`);
    }
}
// tslint:disable-next-line: max-classes-per-file
class Animal2 {
    comer() {
        console.log(`Estoy comiendo ${this.comida}`);
    }
}
// tslint:disable-next-line: max-classes-per-file
class Alumno {
    constructor(name, curso, comida) {
        this.name = name;
        this.curso = curso;
        this.comida = comida;
    }
}
applyMixins(Alumno, [Persona, Animal2]);
let Al = new Alumno('Pepe', 'TS', 'Patatas');
Al.saludar();
Al.comer();
//# sourceMappingURL=13_mixixns.js.map
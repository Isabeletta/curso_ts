class Reptil {
    constructor(name = '') {
        this.name = name;
    }
}
// tslint:disable-next-line: max-classes-per-file
class Serpiente extends Reptil {
    picar() { }
    ponerHuevos() { }
}
// tslint:disable-next-line: max-classes-per-file
class Tortuga extends Reptil {
    nadar() { }
    ponerHuevos() { }
}
// tslint:disable-next-line: max-classes-per-file
class Lagarto extends Reptil {
}
// tslint:disable-next-line: max-classes-per-file
class Cocodrilo extends Reptil {
    constructor() {
        super(...arguments);
        this.dientes = true;
    }
}
// Se infiere un tipo de unión
let bichos = [new Serpiente(), new Tortuga(), new Lagarto()];
// bichos.push(22); Error de tipos
bichos.push(new Cocodrilo());
let Bichos2 = [new Serpiente(), new Tortuga(), new Lagarto()];
function getAnimal() {
    return new Serpiente();
}
let reptil = getAnimal();
reptil.ponerHuevos();
// reptil.picar(); // Metodo no soportado
reptil.picar();
// Aserción de tipos
let reptil2 = getAnimal();
reptil2.ponerHuevos();
reptil2.picar();
// TypeGuards
function isSerpiente(reptil) {
    return reptil.picar() != undefined;
}
let reptil3 = getAnimal();
if (isSerpiente(reptil3)) {
    reptil3.picar();
}
// Exxtender los tipos usando genericos
function getAnimalMejor() {
    let a = new Serpiente();
    return a;
}
let reptil4 = getAnimalMejor();
reptil4.ponerHuevos();
reptil4.picar();
//# sourceMappingURL=09_mas_tipos.js.map
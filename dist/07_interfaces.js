class Animal {
    constructor(especie = '') {
        this.vivo = true;
    }
    comer() {
        console.log('Estoy comiendo');
    }
}
// tslint:disable-next-line: max-classes-per-file
class Gato extends Animal {
    constructor(especie, color, uñas) {
        super(especie);
        this.color = color;
        this.uñas = uñas;
    }
    maullar() {
        console.log('Miau');
    }
}
let g = new Gato('gato', 'negro', true);
let a;
let g1;
let f;
// a = {
//     especie: 'bicho',
//     vivo: true,
//     comer() {console.log('Estoy comiendo'); },
// };
f = {
    color: '',
    uñas: true,
    maullar() { },
};
//# sourceMappingURL=07_interfaces.js.map
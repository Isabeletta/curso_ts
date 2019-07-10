export default class Persona {
    // static especie = 'Homo sapiens';
    // public nombre: string;
    // protected edad: number;
    // constructor(nombre = '', edad = 0) {
    //     this.nombre = nombre;
    //     this.edad = edad;
    // }

    static especie = 'Homo sapiens';

    constructor( public nombre: string = '',
                 protected edad: number = 0) {}

    static pensar() {
        // console.log('Pienso...');
        return 'Pienso...';
    }

    saludar(otro = 'amigo') {
        console.log(`Hola ${otro} soy ${this.nombre}`);
    }
}

import Persona from "./06_persona";

function algo(a: any, b: any): any {
    return a + b;
}

// Genéricos o tipos dinámicos

interface INumerico {
    a: number;
    b: number;
}

function algoMejor2<T extends INumerico>(a: T): T {
    return a;
}

function algoMejor<T>(a: T, b: T): T {
    return a as any + b as any;
}

const x = algoMejor<number>(2, 8);
console.log('Suma de algo: ' + x);
const x2 = algoMejor<string>('Hola ', 'mundo');
console.log('Concatenación de algo: ' + x2);

// Ejemplos de TypeScript nativo
let z: Array<string>;
let y: Promise<Array<Persona>>;

interface IEsNumerico<T> {
    prop1: T;
    prop2: T;
    prop3: T;
}

class Generic<T> {
    add: (x: T, y: T) => T;
}

const g1 = new Generic<number>();
// g1.add('Pepe', 8);  // Error pq hemos dicho que sea de tipo number
const g2 = new Generic<string>();
// g2.add('Hola ', 'mundo');

// Se pueden usar diversos genéricos

function dobleGeneric<T, U>(a: T, b: T): T {
    return a;
}

// Genericos en extienden interfaces

interface IWithLength {
    length: number;
}
// function generic2<T extends IWithLength>(a: T): T {
//     console.log(a.length);
// }

// interface IRegExpConstructor {
//     (pattern: RegExp):
// }

// Enum
enum colores {Rojo = 1, Verde, Azul}
enum colores0 {Rojo, Verde, Azul}
console.log(colores.Rojo);
console.log(colores0.Rojo);

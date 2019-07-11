"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function algo(a, b) {
    return a + b;
}
function algoMejor2(a) {
    return a;
}
function algoMejor(a, b) {
    return a + b;
}
const x = algoMejor(2, 8);
console.log('Suma de algo: ' + x);
const x2 = algoMejor('Hola ', 'mundo');
console.log('Concatenación de algo: ' + x2);
// Ejemplos de TypeScript nativo
let z;
let y;
class Generic {
}
const g1 = new Generic();
// g1.add('Pepe', 8);  // Error pq hemos dicho que sea de tipo number
const g2 = new Generic();
// g2.add('Hola ', 'mundo');
// Se pueden usar diversos genéricos
function dobleGeneric(a, b) {
    return a;
}
// function generic2<T extends IWithLength>(a: T): T {
//     console.log(a.length);
// }
// interface IRegExpConstructor {
//     (pattern: RegExp):
// }
// Enum
var colores;
(function (colores) {
    colores[colores["Rojo"] = 1] = "Rojo";
    colores[colores["Verde"] = 2] = "Verde";
    colores[colores["Azul"] = 3] = "Azul";
})(colores || (colores = {}));
var colores0;
(function (colores0) {
    colores0[colores0["Rojo"] = 0] = "Rojo";
    colores0[colores0["Verde"] = 1] = "Verde";
    colores0[colores0["Azul"] = 2] = "Azul";
})(colores0 || (colores0 = {}));
console.log(colores.Rojo);
console.log(colores0.Rojo);
//# sourceMappingURL=10_genericos.js.map
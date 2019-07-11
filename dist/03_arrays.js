function sumaTotal(aDatos = []) {
    // aClone = aDatos.slice()
    let r = 0;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < aDatos.length; i++) {
        const item = aDatos[i];
        r += item;
    }
    return r;
}
function sumaTotal2(aDatos = []) {
    let r = 0;
    // tslint:disable-next-line: forin
    for (const i in aDatos) {
        const item = aDatos[i];
        r += item;
    }
    return r;
}
// ES6: nueva madera de iterar forof
// Da error pq aunq en la definicion pone object, en realidad se refiere a array
// const o = {}
// for (const iterator of o) {
// }
function sumaTotalES6(aDatos = []) {
    let r = 0;
    for (const item of aDatos) {
        r += item;
    }
    return r;
}
const aDatos = [1, 4, 6, 8, 5, 9];
console.log(sumaTotal(aDatos));
console.log(sumaTotal2(aDatos));
console.log(sumaTotalES6(aDatos));
/*
Algunas funciones de array -> Todas estas funciones esperan una funcion callBack
    aDatos.forEach()
    aDatos.map()
    aDatos.filter()
    aDatos.reduce()
    aDatos.reduceRight()
    aDatos.some()
    aDatos.every()
*/
function mostrar(aDatos = []) {
    aDatos.forEach((item, i, array) => { console.log(`El item ${i + 0} vale ${item}`); });
}
mostrar(aDatos);
// Proyecciones
function cuadrados(aDatos = []) {
    return aDatos.map((item) => item * item);
}
console.log(cuadrados(aDatos));
// Filtros
function pares(aDatos = []) {
    return aDatos.filter((item) => !(item % 2));
}
console.log(pares(aDatos));
// Reduce
function sumaTotalReduce(aDatos = []) {
    return aDatos.reduce((total, item) => total += item);
}
console.log(sumaTotalReduce(aDatos));
// Some y every (Funciones booleanas)
function sonTodosImpares(aDatos = []) {
    return aDatos.every((item) => (item % 2));
}
console.log(sonTodosImpares(aDatos));
function hayAlgunoCentenas(aDatos = []) {
    return aDatos.some((item) => (item >= 100));
}
console.log(sonTodosImpares(aDatos));
// Objetos envolventes (wrapper object)
let cadena = 'Hola';
let number = 23;
cadena.toUpperCase(); // Objetos que tiene sus metodos propios, en lugar de utilzar por ejemplo toUpperCase(cadena)
number.toLocaleString();
//# sourceMappingURL=03_arrays.js.map
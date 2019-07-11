function Algo() { }
const o = new Algo();
Object.defineProperty(o, 'nombre', { value: 'Pepe' });
console.log(o);
console.log(o.nombre);
function curso(target) {
    Object.defineProperty(target.propertype, 'curso', { value: () => 'Algular 2' });
}
// @curso
class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
}
const es = new Estudiante('Pepe');
console.log(es);
// console.log(es.curso);
// @Student({
//     course: 'Algular 2',
// })
// class Estudiante2 {
//     firstName,
// }
//# sourceMappingURL=14_decoradores.js.map
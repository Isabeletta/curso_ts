function Algo() {}
const o = new Algo();

Object.defineProperty(o, 'nombre', {value: 'Pepe'});
console.log(o);
console.log(o.nombre);

function cursoTS(target) {
    Object.defineProperty(
        target.propertype,
        'curso',
        {value: () => 'TypeScript'},
    );
}

@cursoTS
class Estudiante {
    constructor(public nombre: string) {}
}

const es = new Estudiante('Pepe');
// es.nombre 'es lo mismo q' es['nombre'] de la segunda manera en tiempo de compilación no puede comprobarlo
// por lo que de esa manera podemos hacer la llamada a la funcion que hemos hecho console.log(es.curso()); sin que de error
console.log(es['curso']());

// console.log(es);
// console.log(es.curso());

// @Student({
//     course: 'Algular 2',
// })
// class Estudiante2 {
//     firstName,

// }

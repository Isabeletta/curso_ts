import { PAISES } from './08_maestros.js';

// export default class Controller {
//     nodos: any;
//     constructor() {
//         console.log('Cargado el control');
//         this.nodos = {
//             nombre: document.querySelector('#nombre'),
//             output: document.querySelector('#output'),
//         };

//         this.nodos.nombre.addEventListener('', this.onInput.bind(this) );

//     }

//     onInput(ev: Event) {
//         const target: any = ev.target;
//         console.log(this);
//         console.dir(ev);
//         console.dir(target);

//         if (target.value) {
//             this.nodos.output.innerHTML = `Hola ${target.value}`;
//         }
//     }
// }

interface INodos {
    nombre: HTMLInputElement;
    btnBorrar: HTMLButtonElement;
    output: HTMLOutputElement;
    paises: HTMLSelectElement;
}

export default class Controller {
    nodos: INodos;
    aPaises: Array<string>;
    constructor() {
        console.log('Cargado el controller');
        this.nodos = {
            nombre: document.querySelector('#nombre') as HTMLInputElement,
            btnBorrar: document.querySelector('#btnBorrar') as HTMLButtonElement,
            output: <HTMLOutputElement>document.querySelector('#output'),
            paises: <HTMLSelectElement>document.querySelector('#paises'),
        };

        this.aPaises = PAISES;

        // Reanderizado del DOM
        let html = '';
        this.aPaises.forEach((item) => {
            html += `<option>${item}</option>`;
        });

        this.nodos.paises.innerHTML = html;

        // Manejadores de eventos
        this.nodos.nombre.addEventListener('input', this.onInput.bind(this));
        this.nodos.btnBorrar.addEventListener('click', this.onClick.bind(this));
    }

    onClick() {
        this.nodos.nombre.value = '';
        this.nodos.output.innerHTML = '';
    }

    onInput(ev: Event) {
        if (!ev.target) {return false; }
        const target = ev.target as HTMLInputElement;
        console.log(this);
        console.dir(target);
        this.nodos.output.innerHTML = `Hola ${target.value}`;
    }
}

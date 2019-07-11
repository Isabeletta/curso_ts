"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MiModulo;
(function (MiModulo) {
    class Animal {
        constructor(especie) {
            this.especie = especie;
            this.parasitos = [new Parasito('pulga')];
        }
    }
    Animal.vivo = true;
    MiModulo.Animal = Animal;
    class Parasito {
        constructor(especie) {
            this.especie = especie;
        }
    }
})(MiModulo = exports.MiModulo || (exports.MiModulo = {}));
//# sourceMappingURL=12_module.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _06_persona_1 = __importDefault(require("./06_persona"));
class Alumno extends _06_persona_1.default {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar(otro = 'amigo') {
        super.saludar(otro);
        console.log(`Y estudio ${this.curso}`);
        console.log(`Estudio ${this.curso}`);
        console.log(`y tengo ${this.edad}`);
    }
}
exports.default = Alumno;
//# sourceMappingURL=06_alumno.js.map
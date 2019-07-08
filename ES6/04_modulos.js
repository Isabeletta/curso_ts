// COMMON JS (el modulo que se usa en ES6)

function suma(a = 0, b = 0) { return a + b }
function resta(a = 0, b = 0) {return a - b }
function producto(a = 1, b = 1) {return a * b }
function division(a = 1, b = 1) {return a / b }

module.export = {}
module.export.suma = suma
module.export.resta = resta
module.export.producto = producto
module.export.division = division

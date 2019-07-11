{
    let cadena;
    let numero;
    let isOk;
    let nada;
    let algo;
    cadena = '';
    numero = 22;
    isOk = true;
    nada = undefined;
    algo = 'Algo';
    algo = 22;
}
// Inferencia de tipos
{
    let cadena = 'Pepe'; // No es necesario declarar el tipo cuando se inicializa
    // cadena = 22;     Da error pq ya esta definido su tipo de tipo cadena
    cadena += ' Perez';
    console.log(cadena);
}
// Array
{
    const aDatos = [];
    // tslint:disable-next-line: array-type
    const aMasDatos = [];
    const aNumber1 = [];
    // tslint:disable-next-line: array-type
    const aNumber2 = [];
    aDatos.push('Pepe', 67, false);
    aMasDatos.push('Pepe', 67, false);
}
// Tuplas (Array de n items fijos)
{
    let aTupla;
    aTupla = [1, 3, 9];
}
// Tipos Objeto
{
    let oDatos;
    oDatos = { nombre: 'Pepe' };
    oDatos = new Date();
    // oDatos = 22 Esto da un error
    let obj = {};
    obj = { nombre: 'Pepe' };
    // obj = 22 da un error
    obj = { edad: 22 };
}
// Tipo unión
{
    let id;
    id = '007';
    id = 444;
    // id = true; Da error
}
// Alias y tipos propios (e.g. seántico)
{
    let id;
    let nombre;
}
//# sourceMappingURL=05_tipos.js.map
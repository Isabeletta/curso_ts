{
    let cadena: string;
    let numero: number;
    let isOk: boolean;
    let nada: undefined;
    let algo: any;

    cadena = '';
    numero = 22;
    isOk = true;
    nada = undefined;
    algo = 'Algo';
    algo = 22;
}

// Inferencia de tipos
{
    let cadena = 'Pepe';    // No es necesario declarar el tipo cuando se inicializa
    // cadena = 22;     Da error pq ya esta definido su tipo de tipo cadena
    cadena += ' Perez';
    console.log(cadena);
}

// Array
{
    const aDatos: any[] = [];
// tslint:disable-next-line: array-type
    const aMasDatos: Array<any> = [];
    const aNumber1: number[] = [];
// tslint:disable-next-line: array-type
    const aNumber2: Array<number> = [];

    aDatos.push('Pepe', 67, false);
    aMasDatos.push('Pepe', 67, false);
}

// Tuplas (Array de n items fijos)
{
    let aTupla: [number, number, number];
    aTupla = [1, 3, 9];
}

// Tipos Objeto
{
    let oDatos: object;
    oDatos = {nombre: 'Pepe'};
    oDatos = new Date();
    // oDatos = 22 Esto da un error
    let obj: object = {};
    obj = {nombre: 'Pepe'};
    // obj = 22 da un error
    obj = {edad: 22};
}

// Tipo unión
{
    let id: string | number;
    id = '007';
    id = 444;
    // id = true; Da error
}

// Alias y tipos propios (e.g. seántico)
{
    type ID = string | number;
    type NumbrePropio = string;
    let id: ID;
    let nombre: NumbrePropio;
}

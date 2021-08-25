const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');


console.clear();


// argumentos que vienen de la consola
// desestructurar el arreglo de la consola para tomar el objeto 3
// const [ , , arg3 = 'base=5' ] = process.argv;
// const [ , base = 5 ] = arg3.split('=');


// const base = 6;

crearArchivo( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
    .catch( err => console.log(err) );







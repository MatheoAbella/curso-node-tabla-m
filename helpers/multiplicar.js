const fs = require('fs');
require('colors');

// colors.enable();

const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        
        let salida = '';
        let consola = '';
        
        for(let i = 1; i <= hasta; i++) {
                // el \n sirve para realizar un salto de linea
                salida += `${ base } x ${ i } = ${ base * i }\n`;
                consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n` ;
                
            }

        if ( listar ) {
            console.log('========================'.blue);
            console.log(  'Tabla del: '.green, base );
            console.log('========================'.blue);
            
            
            console.log(consola);

        }        

        fs.writeFileSync( `./salida/tabla-${ base }.txt`, salida);


        return `tabla-${ base }.txt`;
    } catch (err) {
        throw err;
    }

}

module.exports = {
    crearArchivo
}
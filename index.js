const isMD = require('./lib/md.js');
const readMarkdown = require('./lib/readMd.js');
const filterMarkdown = require('./lib/filterFile.js');
const statsOption = require('./lib/stats.js');
const validateOption = require('./lib/validate.js');
const statsValidateOptions = require ('./lib/statsvalidate.js')




module.exports = (path, {validate, stats}) => { 
    if(path === null){
        console.log('No se ha especificado ninguna ruta de archivo.');
        return 'No se ha especificado ninguna ruta de archivo.';
    }
    if(isMD(path) === false){
        console.log('No hay ningun archivo MD en esta ruta.');
        return 'No hay ningun archivo MD en esta ruta.';
    }
    if(path){
        return readMarkdown(path)
            .then( async data => {
                const justLinks = filterMarkdown(data, path);
                if(data === ''){
                    console.log('El archivo esta vacío');
                    return 'El archivo esta vacío';
                }else if ( validate && stats){
                    const validateResults = await validateOption(justLinks);
                    const validateStatsResults = await statsValidateOptions(validateResults);
                    console.log(validateStatsResults);
                    return validateStatsResults;
                } else if(stats){
                    const statsResults = statsOption(justLinks);
                    console.log(statsResults);
                    return statsResults;
                } else if (validate){
                    const validateResults = await validateOption(justLinks);
                    console.log(validateResults);
                    return validateResults;
                } else {
                    console.log(justLinks);
                    return justLinks;
                }
      
            })
            .catch(error => console.log(error));
    }
};

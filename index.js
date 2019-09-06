const isMD = require('./lib/md.js');
const readMarkdown = require('./lib/readMd.js');
const filterMarkdown = require('./lib/filterFile.js');
const statsOption = require('./lib/stats.js');
const validateOption = require('./lib/validate.js');




module.exports = (path, {validate, stats}) => {

  if(path === null){
    console.log('No se ha especificado ninguna ruta de archivo.');
    return `No se ha especificado ninguna ruta de archivo.`;
  }
  if(isMD(path) === false){
    console.log('No hay ningun archivo MD en esta ruta.');
    return `No hay ningun archivo MD en esta ruta.`;
  }
  if(path){
    return readMarkdown(path)
    .then(data => {
      if(data === ''){
        console.log('El archivo esta vacío');
        return `El archivo esta vacío`;
      }
      const justLinks = filterMarkdown(data, path);
      if(stats){
        console.log(statsOption(justLinks));
        return statsOption(justLinks);
      } else if (validate){

      } else if ( validate && stats){

      } else {
         console.log('No ingresaste una opción valida.\n Las banderas válidas son: \n --validate \n --stats.') 
         return
      }
      console.log(justLinks);
      return justLinks;
      
    })
    .catch(error => console.log(error));
  }
};

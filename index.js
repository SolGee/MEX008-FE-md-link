const isMD = require('./lib/md.js');
const readMarkdown = require('./lib/readMd.js');
const filterMarkdown = require('./lib/filterFile.js');
const statsOption = require('./lib/stats.js');




module.exports = (path, {validate, stats}) => {
  
  if(path === null){
    console.log('No se ha especificado ninguna ruta de archivo.')
    return `No se ha especificado ninguna ruta de archivo.`;
  }
  if(isMD(path) === false){
    console.log[('No hay ningun archivo MD en esta ruta.')]
    return `No hay ningun archivo MD en esta ruta.`
  }
  if(path){
    return readMarkdown(path)
    .then(data => {
      if(data === ''){
        console.log('El archivo esta vacío')
        return `El archivo esta vacío`;
      }
      const justLinks = filterMarkdown(data, path)
      if(stats){
        return statsOption(justLinks);
      }
      console.log(justLinks)
      return justLinks;
      
    })
    .catch(error => console.log(error))
  }
};

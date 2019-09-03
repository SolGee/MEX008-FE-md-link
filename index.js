const isMD = require('./lib/md.js');
const readMarkdown = require('./lib/readMd.js');
const filterMarkdown = require('./lib/filterFile.js');
const getPath = require('path');



module.exports = path => {
  const endPath = process.argv[2] || path;
  const firstOption = process.argv[3];
  if(isMarkdown(endPath) === false){
    return `No hay ningun archivo MD en la ruta indicada.`
  }
  const fileContent = readFile(endPath);
  fileContent
  .then(data => {
    if (data === ''){
      return `El archivo esta vacío.`
    }
    filterMarkdown(data, endPath)
  })
  .catch(error => console.log(error))
};

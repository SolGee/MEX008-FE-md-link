const pathFile = require('path');

const isMD = (path) => {
    if(pathFile.extname(pathFile) === '.md'){
        return true;
    }else{
        return false;
    }
}

module.exports = isMD;
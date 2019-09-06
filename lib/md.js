const pathFile = require('path');

const isMD = (path) => {
    return pathFile.extname(path) === '.md' ? true : false;
};

module.exports = isMD;
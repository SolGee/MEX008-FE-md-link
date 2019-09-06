const pathFile = require('path');

const isMD = (path) => {
    pathFile.extname(path) === '.md' ? true : false;
};

module.exports = isMD;
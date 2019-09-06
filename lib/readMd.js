const fs = require('fs');


const readFS = (path) => {
    return new Promise((resolve, reject) => 
    fs.readFile(path, 'utf8', (err, data) => {
        err ? reject(err.message) : resolve(data);
    }));
};

module.exports = readFS;
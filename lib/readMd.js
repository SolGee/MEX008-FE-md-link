const fs = require('fs');


const readFS = (path) => {
    return new Promise((resolve, reject) =>
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) throw err;
        return data;
    }));
}

module.exports = readFS;
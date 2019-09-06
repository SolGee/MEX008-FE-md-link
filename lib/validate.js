const fetch = require('node-fetch');


const petition = url => {
    return new Promise((resolve) => {
        fetch(url).then(response => resolve(response))
            .catch((err) => {
                console.log('Este link esta roto: ', url);
                resolve (err);
            });
    });
};

const validate = async (array) => {
    const validateArray = [];
    for (let i = 0; i < array.length; i++){
        const response = await petition(array[i].href);
        Object.assign(array[i], {status: response && response.statusText == 'OK' ? 'OK' : 'FAIL'});
        validateArray.push(array[i]);
    }
    return validateArray;
};

module.exports = validate;
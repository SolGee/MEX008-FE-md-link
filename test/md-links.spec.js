const mdLinks = require('../index.js');
/*const readMarkdown = require('../lib/readMd.js');
const filterMarkdown = require('../lib/filterFile.js');
const statsOption = require('../lib/stats.js');
const validateOption = require('../lib/validate.js');
const statsValidateOptions = require ('../lib/statsvalidate.js')*/


// TEST index.js

describe('mdLinks', () => {
    it('Should be a function', () => {
        expect(typeof mdLinks).toBe('function');
    });
    it('Should console.log \'No hay ningun archivo MD en esta ruta.\'', () => {
        expect(mdLinks('../md-files/notMD.txt', {validate: null, stats: null})).toBe('No hay ningun archivo MD en esta ruta.');
    });
    it('Should console.log \'No se ha especificado ninguna ruta de archivo.\'', () => {
        expect(mdLinks(null, {validate: null, stats: null})).toBe('No se ha especificado ninguna ruta de archivo.');
    });
    it('Should console.log an array once the user pass a MD file\'s route', () => {
        expect(mdLinks('../md-files/justlinks.md', {validate: null, stats: null})).resolves.toEqual([
            { href: 'https://github.com/SolGee/MEX008-FE-md-link',
                text: 'SolGee Repository',
                path: '.\\md-files\\justlinks.md' },
            { href: 'https://hipsssssum.co/',
                text: 'Hipsum',
                path: '.\\md-files\\justlinks.md' },
            { href: 'https://markdown.es/sintaxis-markdown/#codi',
                text: 'Markdown',
                path: '.\\md-files\\justlinks.md' },
            { href: 'https://hipsssssum.co/',
                text: 'Hipsum',
                path: '.\\md-files\\justlinks.md' } 
        ]);
    });
    it('Once the user pass a MD file, should return an array that includes an \'status\' property', () => {
        expect(mdLinks('../md-files/justlinks.js', {validate: true, stats: null})).resolves.toEqual([
            { href: 'https://github.com/SolGee/MEX008-FE-md-link',
                text: 'SolGee Repository',
                path: '.\\md-files\\justlinks.md',
                status: 'OK' },
            { href: 'https://hipsssssum.co/',
                text: 'Hipsum',
                path: '.\\md-files\\justlinks.md',
                status: 'FAIL' },
            { href: 'https://markdown.es/sintaxis-markdown/#codi',
                text: 'Markdown',
                path: '.\\md-files\\justlinks.md',
                status: 'OK' },
            { href: 'https://hipsssssum.co/',
                text: 'Hipsum',
                path: '.\\md-files\\justlinks.md',
                status: 'FAIL' }
        ]);
        
    });
});

#!/usr/bin/env node

const endPath = process.argv[2] || null;

const options = {
    validate : process.argv.indexOf('--validate') > -1,
    stats : process.argv.indexOf('--stats') > -1
};

require('./index.js')(endPath, options);
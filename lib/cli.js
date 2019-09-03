#!/usr/bin/env node

require ('./index.js')();

const [A, B, ...args] = process.argv;

console.log(args)

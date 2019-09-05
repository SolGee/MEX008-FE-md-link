#!/usr/bin/env node

const [A, B, ...args] = process.argv;

const endPath = process.argv[2] || null;
const validate = process.argv[3] || process.argv [4];
const stats = process.argv[3] || process.argv [4];

let statsStatus;
stats === '--stats' ? statsStatus = true : statsStatus = null;

let validateStatus;
validate === '--validate' ? validateStatus = true : validateStatus = null;

require('./index.js')(endPath, { validate: validateStatus, stats: statsStatus });
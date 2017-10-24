'use strict';

const mymodule = require('./06-module.js');

const dir = process.argv[2];
const ext = process.argv[3];

mymodule(dir, ext, (err, files) => {
    if (err) throw err;
    for (let name of files) {
        console.log(name);
    }
});

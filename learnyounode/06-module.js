'use strict';

const path = require('path');
const fs = require('fs');

module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, files) => {
        if (err) return callback(err);
        const matches = files.filter(name => path.extname(name) == '.' + ext);
        return callback(null, matches);
    });
}


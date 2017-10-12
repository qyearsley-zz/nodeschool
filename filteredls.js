const path = require('path');
const fs = require('fs');
const dir = process.argv[2];
const ext = process.argv[3];
fs.readdir(dir, (err, files) => {
    if (err) throw err;
    for (let name of files) {
        if (path.extname(name) === '.' + ext) {
            console.log(name);
        }
    }
});

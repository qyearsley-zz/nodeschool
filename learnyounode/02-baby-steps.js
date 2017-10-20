'use strict';

let sum = 0;

for (let arg of process.argv) {
    let n = Number(arg);
    if (!isNaN(n)) {
        sum += n;
    }
}

console.log(sum);

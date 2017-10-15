'use strict';

function alwaysThrows() {
    throw new Error('OH NOES');
}

function iterate(n) {
    console.log(n);
    return n + 1;
}

Promise.resolve(1)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(error => { console.log(error.message); });

// Try swapping your rejection handler from console.log to alwaysThrows.
// Your program will now throw an exception in the global context!  Ahh!
// Try to fix this using the approach described above.

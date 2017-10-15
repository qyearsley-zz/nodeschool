'use strict';

function all(promise1, promise2) {
    let numFulfilled = 0;
    const result = [null, null];
    return new Promise((resolve, reject) => {
        promise1.then(value => {
            result[0] = value;
            numFulfilled++;
            if (numFulfilled == 2) {
                resolve(result);
            }
        });
        promise2.then(value => {
            result[1] = value;
            numFulfilled++;
            if (numFulfilled == 2) {
                resolve(result);
            }
        });
    });
}

all(getPromise1(), getPromise2()).then(console.log);

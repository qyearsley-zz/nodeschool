'use strict';

const json = process.argv[2];
function parsePromise() {
    return new Promise((resolve, reject) => {
        try {
            resolve(JSON.parse(json));
        } catch (error) {
            reject(error);
        }
    });
}

parsePromise().then(null, (error) => {
    console.log(error.message);
});

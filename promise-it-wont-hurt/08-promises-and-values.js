'use strict';

function attachTitle(s) { return 'DR. ' + s; }
const promise = Promise.resolve('MANHATTAN');
promise.then(attachTitle).then(console.log);

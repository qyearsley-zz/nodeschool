'use strict';

const resolved = Promise.resolve('PROMISE VALUE');
const rejected = Promise.reject(new Error('REJECTED ERROR'));

function onReject(err) {
    console.log(err.message);
}

resolved.catch(onReject);
rejected.catch(onReject);

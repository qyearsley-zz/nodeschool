'use strict';

const http = require('q-io/http');
http.read('http://localhost:7000').then(value => {
    const s = value.toString('utf8');
    return http.read('http://localhost:7001/' + s);
}).then(value => {
    console.log(JSON.parse(value.toString('utf8')));
}).catch(console.error);

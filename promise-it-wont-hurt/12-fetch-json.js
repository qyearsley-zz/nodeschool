'use strict';

const http = require('q-io/http');
http.read('http://localhost:1337').then((value) => {
    console.log(JSON.parse(value.toString('utf8')));
});

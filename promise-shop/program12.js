const http = require('q-io/http');

http.read('http://localhost:1337')
    .then(response => {
        return JSON.parse(response);
    })
    .then(console.log)
    .catch(console.error);

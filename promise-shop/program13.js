const http = require('q-io/http');

const sessioncacheurl = 'http://localhost:7000/';
const dbaseurl = 'http://localhost:7001/';

http.read(sessioncacheurl)
  .then((IdUser) => {
    const dabaseurl = dbaseurl + IdUser;
    return http.read(dabaseurl);
  })
  .then((JsonString) => {
    const Objectuser = JSON.parse(JsonString);
    console.log(Objectuser);
  })
  .catch((error) => {
    console.error(error.message);
  });

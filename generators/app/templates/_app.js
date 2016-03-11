'use strict';

let Hapi = require('hapi'),
    Inert = require('inert'),
    Vision = require('vision'),
    HapiSwagger = require('hapi-swagger'),
    Joi = require('joi'),
    fs = require('fs'),
    config = require('./config/application');
    require('./config/db.js');


let serverConfig = { };
let server = new Hapi.Server(serverConfig);

server.app.name = config.app.name;
server.app.serect = config.environment.secretKey;

server.connection({port: config.app.port, host: 'localhost', routes: {cors: true}});

server.register([
  Inert,
  Vision,
  {
      register: HapiSwagger,
      options: {}
  },
  ], function (err) {
    if (err) {
        server.log(['error'], 'hapi-swagger load error: ' + err);
    }else{
        server.log(['start'], 'hapi-swagger interface loaded');
    }
  }
);

// Iterates through all ./routes files to init the routes for use in the api
fs.readdirSync('./routes').forEach(function(curFile) {
  if (curFile.substr(-3) === '.js') {
    let route = require('./routes/' + curFile);
    route.routes(server, Joi);
  }
});

server.start(function () {
  let dashChars = '+' + new Array(32 + server.info.uri.length + server.app.name.length).join('-') + '+';
  console.log(dashChars);
  console.log('| Application `%s` is running at %s |', server.app.name, server.info.uri);
  console.log(dashChars);
});

'use strict';
let <%= scaffoldName.capital  %>Controller = require('../controllers/<%= scaffoldName.lower  %>Controller');

let <%= scaffoldName.lower  %>Controller = new <%= scaffoldName.capital  %>Controller();


function <%= scaffoldName.capital  %>Routes(server, Joi) {
  /* Example
  server.route({
    method: 'POST',
    path: '/',
    config: {
      handler: <%= scaffoldName.lower  %>Controller.method,
      description: 'Get todo',
      notes: 'An exmple description',
      tags: ['api'],
      validate: {
        payload: {
          item: Joi.string()
                    .required()
                    .description('Describe the payload item')

        }
      }
    }
  });
  */
}

module.exports.routes = <%= scaffoldName.capital  %>Routes;

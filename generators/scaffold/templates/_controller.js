'use strict';
<% if (!onlyController) { %>let <%= scaffoldName.capital  %>Model = require('../models/<%= scaffoldName.lower  %>Model');<%}%>
let Boom = require('boom');

module.exports = class <%= scaffoldName.capital  %>Controller {
  constructor() {

  }

};

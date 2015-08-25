'use strict';

var generators = require('yeoman-generator'),
    mkdirp    = require('mkdirp'),
    yosay = require('yosay'),
    slugify = require('slugg'),
    chalk = require('chalk'),
    _ = require('lodash');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function () {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        templateContext = {
          scaffoldName: {
            capital: this.scaffoldName.charAt(0).toUpperCase() + this.scaffoldName.slice(1),
            lower: this.scaffoldName.charAt(0).toLowerCase() + this.scaffoldName.slice(1)
          },
        };


    this.fs.copyTpl(sourceRoot + '/_controller.js', destRoot + '/controllers/'+ templateContext.scaffoldName.lower +'Controller.js', templateContext);
    console.log(this.skipModel);
    if (!this.skipModel) {
      this.fs.copyTpl(sourceRoot + '/_model.js', destRoot + '/models/'+ templateContext.scaffoldName.lower +'Model.js', templateContext);
    }
    this.fs.copyTpl(sourceRoot + '/_route.js', destRoot + '/routes/'+ templateContext.scaffoldName.lower +'Route.js', templateContext);

  },

  constructor: function () {
    generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: true });
    this.scaffoldName = _.camelCase(this.appname);

    this.option('skip-model');
    this.skipModel = this.options['skip-model'];
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    this._createProjectFileSystem();
  },

});

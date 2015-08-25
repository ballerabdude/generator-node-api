'use strict';

var generators = require('yeoman-generator'),
    mkdirp    = require('mkdirp'),
    yosay = require('yosay'),
    slugify = require('slugg'),
    chalk = require('chalk');

module.exports = generators.Base.extend({
  _createProjectFileSystem: function () {
    var destRoot = this.destinationRoot(),
        sourceRoot = this.sourceRoot(),
        templateContext = {
          appname: this.appname,
          mongoDBUri: this.mongoDBUri,
          DBUser: this.DBUser,
          DBPass: this.DBPass
        };

    mkdirp(destRoot + '/config');
    mkdirp(destRoot + '/controllers');
    mkdirp(destRoot + '/models');
    mkdirp(destRoot + '/routes');

    this.fs.copyTpl(sourceRoot + '/db.js', destRoot + '/config/db.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/application.js', destRoot + '/config/application.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/Gulpfile.js', destRoot + '/Gulpfile.js', templateContext);
    this.fs.copyTpl(sourceRoot + '/package.json', destRoot + '/package.json', templateContext);
    this.fs.copy(sourceRoot + '/.editorconfig', destRoot + '/.editorconfig');
    this.fs.copy(sourceRoot + '/.jshintrc', destRoot + '/.jshintrc');

  },

  _getPrompts: function () {
    var prompts = [
      {
        name: 'name',
        message: 'What is the name of your project?',
        default: slugify(this.appname)
      },
      {
        name: 'mongoDBUri',
        message: 'What is the MongoDB Uri',
        default: 'mongodb://locolhost/' + slugify(this.appname)
      },
      {
        name: 'DBUser',
        message: 'What is the MongoDB user',
        default: slugify(this.appname)
      },
      {
        name: 'DBPass',
        message: 'What is the MongoDB DB Password',
        default: '1234567890'
      },
    ];

    return prompts;
  },

  _saveAnswers: function (answers, callback) {
    this.appname = answers.name;
    this.mongoDBUri = answers.mongoDBUri;
    this.DBUser = answers.DBUser;
    this.DBPass = answers.DBPass;
    callback();
  },

  constructor: function () {
    generators.Base.apply(this, arguments);

  },

  intializing: function () {
    var message = chalk.yellow.bold('Welcome to jStack ') + chalk.yellow('A solid JS stack to develop with');
    this.log(yosay(message, { maxLength: 18}));
  },

  prompting: function () {
    var done = this.async();

    this.prompt(this._getPrompts(), function (answers) {
      this._saveAnswers(answers, done);
    }.bind(this));
  },

  configuring: function () {
    this.config.save();
  },

  writing: function () {
    this._createProjectFileSystem();
  },

  install: function () {
    this.npmInstall();
  },

});

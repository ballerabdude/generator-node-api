# generator-node-api [![Build Status](https://secure.travis-ci.org/BallerAbdude/generator-node-api.png?branch=master)](https://travis-ci.org/BallerAbdude/generator-node-api)

> [Yeoman](http://yeoman.io) generator


# Work in progress
### Havent started on documentation yet


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-node-api from npm, run:

```bash
npm install -g generator-node-api
```

Finally, initiate the generator:

```bash
yo node-api
```

# Things you can do with node-api
## App skeleton

```bash
yo node-api
```
<small>Creates a basic node app</small>
```
root/
├── config
|   ├──db.js
|   ├──application.js
├── app.js
├── node_modules/
├── .editorconfig
├── .jshintrc
├── .yo-rc.json
├── Gulpfile.js
├── package.json
├── README.md
```
## Scaffolding Controllers, Routes, and Models

```bash
yo node-api:scaffold NAME
```
```bash
yo node-api:scaffold NAME --skip-model
```
###Run ```yo node-api``` before you run the scaffold.
Will scaffold an application for you just like rails and add the files to your project ;-]
```
root/
├── controllers
|   ├──nameController.js
├── models
|   ├──nameModel.js
├── routers
|   ├──nameroutes.js

```


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

MIT

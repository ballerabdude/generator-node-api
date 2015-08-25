'use strict';
let gulp = require('gulp'),
    spawn = require('child_process').spawn,
    iojs;

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
  if (iojs) {
    iojs.kill();
  }
  iojs = spawn('iojs', ['app.js'], {stdio: 'inherit'});
  iojs.on('close', function (code) {
    if (code === 8) {
      gulp.log('Error detected, waiting for changes...');
    }
  });
});

gulp.task('server-debug', function () {

});

/**
 * $ gulp
 * description: start the development environment
 */
gulp.task('default', function() {
  gulp.run('server');

  gulp.watch(['./app.js', './**/*.js'], function() {
    gulp.run('server');
  });

  // Need to watch for sass changes too? Just add another watch call!
  // no more messing around with grunt-concurrent or the like. Gulp is
  // async by default.
});

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (iojs) {
      iojs.kill();
    }
});

var gulp = require('gulp'),
    gls = require('gulp-live-server');

gulp.task('server', function() {
    var server = gls('.');
    server.start().then(function(result) {
        console.log('Server exited with result:', result);
    });
    return gulp.watch(['index.js', 'models/*.js'], function(file) {
      console.log(file);
      server.start.apply(server);
    });
});

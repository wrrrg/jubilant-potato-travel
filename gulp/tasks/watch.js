var   gulp = require('gulp'),
      watch = require('gulp-watch'),
      browserSync = require('browser-sync');

gulp.task('watch', function(){
  // watch('./app/index.html', function(){
  //   gulp.start('html');
  // });
  browserSync.init({
    // notify: false;
    server: {
      baseDir: "app"
    }
  });


  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('cssInject');
  });

  watch('./app/index.html', function(){
    browserSync.reload();
  });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./app/temp/styles/styles.css').pipe(browserSync.stream());
});

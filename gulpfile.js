var gulp = require('gulp');
var uglify = require('gulp-uglify');


//TASKS

// Uglify

gulp.task('scripts', function(){

    // Minify gneral js
    gulp.src('js/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));

    // Minify vendor js
    gulp.src('js/vendor/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js/vendor'));
});

// Styles

gulp.task('styles', function(){
  console.log('styles task executed.')
});

// Watch Tasks
gulp.task('watch', function(){
  gulp.watch('js/**/*.js',['scripts'])
})

gulp.task('default',['scripts','styles','watch']);

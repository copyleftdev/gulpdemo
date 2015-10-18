var gulp = require('gulp');
var uglify = require('gulp-uglify');


//TASKS

// uglify

gulp.task('scripts', function(){

    // Minify gneral js
    gulp.src('js/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));

    // Minify vendor js
    gulp.src('js/vendor/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/vendor'));
});

gulp.task('styles', function(){
  console.log('styles task executed.')
});

gulp.task('default',['scripts','styles']);

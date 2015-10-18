var gulp = require('gulp');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');


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

// SASS

gulp.task('sass', function() {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('build/sass-compiled'));
});

gulp.task('sass:watch', function() {
  gulp.watch('sass/**/*.scss',['sass'])
})

// Styles

gulp.task('styles', function(){
  console.log('styles task executed.')
});

// Watch Tasks
gulp.task('script:watch', function(){
  gulp.watch('js/**/*.js',['scripts'])
})

gulp.task('default',['scripts','styles','sass']);

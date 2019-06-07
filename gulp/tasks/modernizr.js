var gulp = require('gulp'),
    modernizer = require('gulp-modernizr');

gulp.task('modernizr', function () {
   return gulp.src(['./app/assets/styles/**/*.css', './app/assets/scripts/**/*.js'])
       .pipe(modernizer({
           "options": [
                "setClasses"
           ]
       }))
       .pipe(gulp.dest('./app/temp/scripts'))
});

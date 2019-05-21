var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    autoPreFixer = require('autoprefixer'),
    cssVars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins');

// when 'styles' task is called:
gulp.task('styles', function () {
    return  gulp.src('./app/assets/styles/styles.css')               // 1. it takes the gulp.src(the original CSS file)
        .pipe(postcss([cssImport,mixins,  cssVars, nested, autoPreFixer]))   // 2. it takes it through the postCSS pipe which is an array of all the plugins
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));                       // 3. the output is gulp.dest(destination) (clean css file, after all the "filters")
});

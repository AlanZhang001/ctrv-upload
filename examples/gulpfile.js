var gulp        = require('gulp');
var gulpWebpack = require('webpack-stream');
var named       = require('vinyl-named-with-path');

//js出错时不中断
var plumber = require('gulp-plumber');
var postcss = require('gulp-postcss');

var csswring    = require('csswring');
var atImport    = require('postcss-import');
var exec        = require('child_process').exec;
var runSequence = require('run-sequence');

var now = new Date().getTime();

var devConfig = {
    externals: {},
    watch: true,
    devtool: '#source-map'
};

gulp.task('dev',function(){
    return gulp.src('./*Main.js')
    .pipe(named())
    .pipe(plumber())
    .pipe(gulpWebpack(devConfig))
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
    gulp.watch(['./*Main.js'], ['dev']);
});

gulp.task('default', function(){
    gulp.run('dev');
    // gulp.run('watch');
});

gulp.task('npm-install', function(cb){
    exec('npm install', function(err, stdout, stderr){
        console.log('stdout : ' + stdout);
        console.log('stderr : ' + stderr);
        cb(err);
    });
});
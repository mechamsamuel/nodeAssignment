/**
 * Created by samuelmecham on 3/19/15.
 */
// Include gulp
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var mocha = require ('gulp-mocha');

//script files
gulp.task('vet', function() {
    return gulp.src('./routes/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/javascipts'))

});

gulp.task('test', function() {
    return gulp.src('./test/apiEndpointTests.js', {read: false})
    .pipe(mocha({reporter: 'nyan'}))
})
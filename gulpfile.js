var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var packageJson = require('./package.json');

var dependencies = Object.keys(packageJson.dependencies);

var jsFiles = 'src/**/*.{js,jsx}';
var otherFiles = [ 'src/**/*.{ico,png,jpg,jpeg,css,eot,svg,ttf,woff}', 'package.json', 'src/frame.html' ];
var moduleFiles = dependencies.map(function(module) { return 'node_modules/' + module + '/**/*' });
var buildDir = 'build/';

gulp.task('babel', function() {
  return gulp.src(jsFiles, { base: '.' })
    .pipe($.plumber())
    .pipe($.newer(buildDir))
    .pipe($.babel({ stage: 1 }))
    .pipe($.react())
    .pipe(gulp.dest(buildDir));
});

gulp.task('copy-dev', function() {
  return gulp.src(otherFiles, { base: '.' })
    .pipe($.newer(buildDir))
    .pipe(gulp.dest(buildDir));
});

gulp.task('copy-modules', function() {
  return gulp.src(moduleFiles, { base: '.' })
    .pipe($.newer(buildDir))
    .pipe(gulp.dest(buildDir));
});

gulp.task('build', ['babel', 'copy-dev', 'copy-modules']);

gulp.task('electron', ['build'], function() {
  gulp.src('build').pipe($.runElectron());
});

gulp.task('watch', ['build', 'electron'], function() {
  gulp.watch(jsFiles, ['babel']);
  gulp.watch(otherFiles, ['copy-dev']);
  gulp.watch(moduleFiles, ['copy-modules']);
});

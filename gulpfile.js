'use strict';

// Libraries
const bourbon    = require('node-bourbon').includePaths;
const browserify = require('gulp-browserify');
const concat     = require('gulp-concat');
const debug      = require('gulp-debug');
const gls        = require('gulp-live-server');
const gulp       = require('gulp');
const path       = require('path');
const plumber    = require('gulp-plumber');
const rename     = require('gulp-rename');
const sass       = require('gulp-sass');
const watch      = require('gulp-watch');

// Variables
const NODE   = 'node_modules/';
const PUBLIC = 'dist/';

const settings = {
  appCSS: {
    src:  NODE + 'sam-resume/**/*.scss',
    dest: PUBLIC + 'app.css',
  },
  appJS: {
    dest: PUBLIC + 'app.js'
  },
};

let server;

// ----------[ Build ]----------------------------------------
gulp.task('build', [
  'js:app',
  'css:app',
  'html',
  'images',
]);

// ----------[ CSS : App ]----------------------------------------
gulp.task('css:app', () =>
  gulp.src(settings.appCSS.src)
  .pipe(sass({
    includePaths: ['styles'].concat(bourbon)
  })
  .on('error', sass.logError))
  .pipe(concat(path.basename(settings.appCSS.dest)))
  .pipe(gulp.dest(path.dirname(settings.appCSS.dest)))
);

// ----------[ HTML ]----------------------------------------
gulp.task('html', () =>
  gulp.src(NODE + 'sam-resume/**/*.html')
  .pipe(plumber())
  .pipe(gulp.dest(PUBLIC))
);

// ----------[ Images ]----------------------------------------
gulp.task('images', () =>
  gulp.src(NODE + 'sam-resume/**/*.{png,gif,svg,jpg,jpeg}')
  .pipe(plumber())
  .pipe(gulp.dest(PUBLIC))
);

// ----------[ JS : App ]----------------------------------------
gulp.task('js:app', () =>
  gulp.src(NODE + 'sam-resume/index.js')
  .pipe(plumber())
  .pipe(browserify())
  .pipe(rename(path.basename(settings.appJS.dest)))
  .pipe(gulp.dest(path.dirname(settings.appJS.dest)))
);

gulp.task('server', () => {
  server = gls.static(['.', 'dist']);
  server.start();
});

// ----------[ Watch ]----------------------------------------
gulp.task('watch', () =>
  watch([
    NODE + 'sam-resume/**/*.js',
    NODE + 'sam-resume/*.js'
  ], () =>
    gulp.start('js:app')
  )
);

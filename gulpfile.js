var env         = require('minimist')(process.argv.slice(2)),
    gulp        = require('gulp'),
    gutil       = require('gulp-util'),
    plumber     = require('gulp-plumber'),
    jade        = require('gulp-jade'),
    browserify  = require('gulp-browserify'),
    browserSync = require('browser-sync'),
    gulpif      = require('gulp-if'),
    stylus      = require('gulp-stylus'),
    prefixer    = require('autoprefixer-stylus'),
    cache       = require('gulp-cache'),
    rsync       = require('rsyncwrapper');

// Компиляция Jade
gulp.task('jade', function () {
    return gulp.src('app/src/jade/*.jade')
        .pipe(plumber())
        .pipe(jade({pretty: !env.p}))
        .pipe(gulp.dest('app/dist/'));
});


// Компиляция Stylus
gulp.task('stylus', function(){
    return gulp.src('app/src/stylus/**/*.styl')
        .pipe(stylus({
          'include css': true,
          use:[prefixer('last 10 versions')]
    }))
        .pipe(gulp.dest('app/dist/css/'))
});


gulp.task('watch', function () {
    gulp.watch('app/src/jade/**/*.jade', ['jade']);
    gulp.watch('app/src/stylus/**/*.styl', ['stylus']);
    gulp.watch('app/src/js/**/*.js', ['js']);
});

gulp.task('browser-sync', function () {
    var files = [
       'app/dist/**/*.html',
       'app/dist/css/**/*.css',
       'app/dist/img/**/*',
       'app/dist/js/**/*.js',
    ];

    browserSync.init(files, {
        server: {
            baseDir: 'app/dist/',
        },
    });
});

// Деплой
gulp.task('deploy', function () {
    rsync({
        ssh: true,
        src: './app/dist/',
        dest: 'user@hostname:/path/to/www',
        recursive: true,
        syncDest: true,
        args: ['--verbose'],
    },
        function (erro, stdout, stderr, cmd) {
            gutil.log(stdout);
        });
});

// Дев
gulp.task('default', [(env.fy) ? 'browserify' : 'jade', 'watch', 'browser-sync']);

// Боевая сборка
gulp.task('build', [(env.fy) ? 'browserify' : 'jade', 'copy', 'vendors-js', 'vendors-css', 'imagemin', 'csso', 'deploy']);

'use strict';

var gulp    = require( 'gulp' );
var react   = require( 'gulp-react' );
var notify  = require( 'gulp-notify' );
var changed = require( 'gulp-changed' );
var uglify  = require( 'gulp-uglify' );
var plumber = require( 'gulp-plumber' );
var jshint  = require( 'gulp-jshint' );
var connect = require( 'gulp-connect' );

var paths = {
    src_css    : './css/**/*.css',
    dest_css   : '../public/css',
    src_fonts  : './fonts/**/*',
    dest_fonts : '../public/fonts',
    src_js     : './js/**/*.{js,jsx}',
    dest_js    : '../public/js',
    app        : '../*.html'
};

// --------------------------------

gulp.task( 'react', function() {
    gulp.src( paths.src_js )
    .pipe(
        plumber({
            errorHandler: notify.onError( 'Error: <%= error.message %>' )
        })
    )
    .pipe( react() )
    .pipe( changed( paths.dest_js ) )
    .pipe( jshint() )
    .pipe( notify(function( file ) {
        if( file.jshint.success ) {
            return false;
        }


        var errors = file.jshint.results.map(function (data) {
            if (data.error) {
                return '(' + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
            }
        }).join('\n');

        return file.relative + ' (' + file.jshint.results.length + ' errors)\n' + errors;
    }) )
    .pipe( uglify() )
    .pipe( gulp.dest( paths.dest_js ) )
    .pipe( connect.reload() )
    .pipe( notify( 'File <%= file.relative %> compiled!' ) );
});

// --------------------------------

gulp.task( 'server', function() {
    connect.server({
        root: '../',
        livereload: true
    });
});

// --------------------------------

gulp.task( 'html', function() {
    gulp.src( '../*.html' )
    .pipe( connect.reload() );
});

// --------------------------------

gulp.task( 'css', function() {
    gulp.src( paths.src_css )
        .pipe( gulp.dest( paths.dest_css ) );

    gulp.src( paths.src_fonts )
        .pipe( gulp.dest( paths.dest_fonts ) );
});

// --------------------------------

gulp.task( 'default', function() {
    var watchers = [
        gulp.watch( paths.src_css, [ 'css' ] ),
        gulp.watch( paths.src_js, [ 'react' ] ),
        gulp.watch( paths.app, [ 'html' ] )
    ];

    watchers.forEach(function( watch ) {
        watch.on( 'change', function( e ) {
            // Get just filename
            var filename = e.path.split( '/' ).pop();
            var bars = '\n================================================';

            console.log( ( bars + '\nFile ' + filename + ' was ' + e.type + ', runing tasks...' + bars ).toUpperCase() );
        });
    });
});

// --------------------------------

gulp.task( 'w', [ 'server', 'default' ] );
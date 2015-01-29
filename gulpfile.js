var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');


gulp.task('react', function(){
	gulp.src('./JScli/jsx/**/*.js')
		.pipe(react())
		.pipe(gulp.dest('./JScli/js'));
});

gulp.task('browserify', function(){
	gulp.src('./JScli/js/**/*.js')
		.pipe(browserify({
			insertGlobals: true,
			debug : true
		}))
		.pipe(gulp.dest('./public/js'))
});

gulp.task('watch',['react', 'browserify'], function(){
	gulp.watch('./JScli/jsx/**/*.js', ['react' ,'browserify']);
	gulp.watch('./JScli/js/**/*.js', ['browserify']);
})
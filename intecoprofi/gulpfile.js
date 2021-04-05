const { src, dest, parallel, series, watch } = require('gulp');

const sass = require('gulp-sass'),
	browserSync = require('browser-sync').create(),
	autoprefixer = require('gulp-autoprefixer'),
	clean_css = require('gulp-clean-css'),
	fileinclude = require('gulp-file-include'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify-es').default; 


const styles = () =>{
	return src('./app/sass/**/*.sass')
	.pipe(
		sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError)
	)
	.pipe(autoprefixer({cascade: false}))
	.pipe(clean_css())
	.pipe(dest('./app/css/'))
	.pipe(browserSync.stream())
}

const htmlInclude = ()=>{
	return src('./app/index.html')
	//.pipe(fileinclude())
	//.pipe(dest('./app/'))
	.pipe(browserSync.stream())
}

const js = () =>{
	return src('./app/js/common.js')
	.pipe(fileinclude())
	.pipe(uglify())
	.pipe(
		rename({
			extname: '.min.js'
		})
	)
	.pipe(dest('./app/js/'))
	.pipe(browserSync.stream())
}


const watchFiles = () =>{
	browserSync.init({
		server: {
			baseDir: "./app/"
		},
		port: 3000,
		notify: false
	});

	watch('./app/sass/**/*.sass', styles);
	watch('./app/*.html', htmlInclude);
	watch(['./app/js/*.js','!./app/js/common.min.js'], js);
}



exports.styles = styles;
exports.htmlInclude = htmlInclude;
exports.js = js;
exports.watchFiles = watchFiles;


exports.default = series(htmlInclude, styles, js, watchFiles);






















// 	gulp = require('gulp'),
// 	browsersync = require('browser-sync').create(),
// 	fileinclude = require('gulp-file-include'),
// 	del = require('del'),
// 	sass = require('gulp-sass'),
// 	autoprefixer = require('gulp-autoprefixer'),
// 	group_media = require('gulp-group-css-media-queries'),
// 	clean_css = require('gulp-clean-css'),
// 	rename = require('gulp-rename'),
// 	uglify = require('gulp-uglify-es').default;

// 	function browserSync(params) {
// 		browsersync.init({
// 			server: {
// 				baseDir: "./" + source_folder + "/"
// 			},
// 			port: 3000,
// 			notify: false
// 		})
// 	}


	


// function css() {
// 	return src('app/sass/')
// 		.pipe(
// 			sass({
// 				outputStyle: 'expanded'
// 			}).on('error', sass.logError)
// 		)
// 		//.pipe(group_media())
// 		.pipe(autoprefixer(['last 5 versions']))
// 		.pipe(dest(source_folder.src.css))
// 		.pipe(clean_css())
// 		.pipe(
// 			rename({
// 				extname: '.min.css'
// 			})
// 		)
// 		.pipe(dest(source_folder.src.css))
// 		.pipe(browsersync.stream())
// }

// function js() {
// 	return src(source_folder.js)
// 		.pipe(fileinclude())
// 		.pipe(dest(path.build.js))
// 		.pipe(uglify())
// 		.pipe(
// 			rename({
// 				extname: '.min.js'
// 			})
// 		)
// 		.pipe(dest(path.build.js))
// 		.pipe(browsersync.stream())
// }



// function watchFiles(params) {
// 	gulp.watch([path.watch.css], css);
// 	gulp.watch([path.watch.js], js);
// }


// function clean(params) {
// 	return del(path.clean);
// }

// let watch = gulp.parallel(gulp.parallel(js, css), watchFiles, browserSync);

// exports.js = js;
// exports.css = css;
// exports.html = html;
// exports.build = build;
// exports.watch = watch;
// exports.default = watch;
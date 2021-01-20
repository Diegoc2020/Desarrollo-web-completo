const { series, src, dest, watch, parallel } = require('gulp');
const sass = require('gulp-sass');
const imageMin = require('gulp-imagemin')
const notify = require('gulp-notify')
const imgWebp = require('gulp-webp')
// Funcion que compila SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss'
}
function css() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}
function minificarCss() {
    return src(paths.scss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}
function imagenes() {
    return src(paths.imagenes)
        .pipe(imageMin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen Minificada' }))
}
function versionWebp() {
    return src(paths.imagenes)
        .pipe(imgWebp())
        .pipe(dest('.build/img/'))
        .pipe(notify({ message: 'Version Webp Lista' }))
}
function watchCss() {
    watch(paths.scss, css)/* *= La carpeta Actual - ** = Todos los archivos con esa extension */
}
exports.minificarCss = minificarCss;
exports.css = css;
exports.imagenes = imagenes;
exports.watchCss = watchCss;
exports.default = series(css, imagenes, versionWebp, watchCss);

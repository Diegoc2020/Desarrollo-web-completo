const { series, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const imageMin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')

const paths = {
    pImagenes: 'src/img/**/*',
    pAppScss: 'src/scss/**/*.scss'
}

// Funcion que compila SASS
function css() {
    return src(paths.pAppScss)
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}
function minificarCss() {
    return src(paths.pAppScss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function imagenes() {
    return src(paths.pImagenes)
        .pipe(imageMin())
        .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen Minificada'}))
}
function versionWebp() {
    return src(paths.pImagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Version Webp' }))
}


function watchCss() {
    watch(paths.pAppScss, css)
}
exports.css = css
exports.imagenes = imagenes
exports.watchCss = watchCss
exports.default = series(css, imagenes, versionWebp, watchCss)
const { series, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const imageMin = require('gulp-imagemin')
const notify = require('gulp-notify')

// Funcion que compila SASS
function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(dest('./build/css'))
}
function minificarCss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}

function imagenes() {
    return src('src/img/**/*')
        .pipe(imageMin())
        .pipe(dest('./build/img'))
    .pipe(notify({message: 'Imagen Minificada'}))
}


function watchCss() {
    watch('src/scss/**/*.scss', css)
}
exports.css = css
exports.imagenes = imagenes
exports.watchCss = watchCss

exports.defaults = series(css, imagenes, watchCss)
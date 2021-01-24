const { series, src, dest, watch, parallel } = require('gulp')
const sass = require('gulp-sass')
const imageMin = require('gulp-imagemin')
const notify = require('gulp-notify')
const webp = require('gulp-webp')
const concat = require('gulp-concat')

// Utilidades css
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')
const cssnano = require('cssnano')
const sourceMaps = require('gulp-sourcemaps')


const paths = {
    pImagenes: 'src/img/**/*',
    pAppScss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

// Funcion que compila SASS
function css() {
    return src(paths.pAppScss)
        .pipe(sourceMaps.init())
        .pipe(sass())
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourceMaps.write('.'))
        .pipe(dest('./build/css'))
}

function minificarCss() {
    return src(paths.pAppScss)
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(dest('./build/css'))
}
function javascript() {
    return src(paths.js)
        .pipe(concat('bundle.js'))
        .pipe(dest('./build/js'))
}

function imagenes() {
    return src(paths.pImagenes)
        .pipe(imageMin())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Imagen Minificada' }))
}
function versionWebp() {
    return src(paths.pImagenes)
        .pipe(webp())
        .pipe(dest('./build/img'))
        .pipe(notify({ message: 'Version Webp' }))
}


function watchCss() {
    watch(paths.pAppScss, css)
    watch(paths.js, javascript)
}
exports.css = css
exports.imagenes = imagenes
exports.watchCss = watchCss
exports.default = series(css, javascript, imagenes, versionWebp, watchCss)
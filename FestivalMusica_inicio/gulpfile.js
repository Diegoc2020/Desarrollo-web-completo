const { series, src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
// Funcion que compila SASS

function css() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe( dest('./build/css') )
}
function minificarCss() {
    return src('src/scss/app.scss')
        .pipe(sass({
            outputStyle:'expanded'
        }))
        .pipe(dest('./build/css'))
}
function watchCss() {
    watch('src/scss/**/*.scss', css)/* *= La carpeta Actual - ** = Todos los archivos con esa extension */
}
exports.minificarCss = minificarCss;
exports.css = css;
exports.watchCss = watchCss;
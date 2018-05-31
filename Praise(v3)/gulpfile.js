const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglifyes');
const path=["src/Thumb.js","src/PraiseButton.js"];
gulp.task('default', () =>
   gulp.watch(path,['babel'])
);
gulp.task('babel',()=>{
    gulp.src(path)
    .pipe(babel({
        presets: ['env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./public'))
})
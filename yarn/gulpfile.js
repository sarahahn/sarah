// gulpfile.js

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',function(){
  return gulp.src('./public/src/scss/**/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('./public/dist/css'));
});

// task : 일 할당..(sass를 실행하라.)
// src : 원본파일
// dest : 변환처리해서 저장 할 폴더
// pipe : 연결.


gulp.task('sass:watch', function () {
  gulp.watch('./public/src/scss/**/*.scss', ['sass']);
});

gulp.task('default',['sass:watch']);
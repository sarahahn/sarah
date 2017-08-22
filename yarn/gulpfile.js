// gulpfile.js_ver0.1 (8/21)

// var gulp = require('gulp');
// var sass = require('gulp-sass');

// gulp.task('sass',function(){
//   return gulp.src('./public/src/scss/**/*.scss')
//     .pipe(sass().on('error',sass.logError))
//     .pipe(gulp.dest('./public/dist/css'));
// });

// // task : 일 할당..(sass를 실행하라.)
// // src : 원본파일
// // dest : 변환처리해서 저장 할 폴더
// // pipe : 연결.


// gulp.task('sass:watch', function () {
//   gulp.watch('./public/src/scss/**/*.scss', ['sass']);
// });

// gulp.task('default',['sass:watch']);






//   // 8/22
//   var sass = require('gulp-sass');

//   gulp.task(name) // 임무할당(원하는 이름을 사용)
//   gulp.task(name,deps,func)
//   // name : gulp의 일을 처리하는 이름(임의 이름)
//   // deps : 바로 뒤의 함수 기능을 수행하기 전에 처리되는 일련의 기능(배열, 생략가능)
//   // function: gulp.task의 기능을 수행(함수)
//   gulp.src : 원본의 위치
//   pipe : 메소드를 연결하여 수행하기 위한 기능
//   gulp.dest : 결과의 위치
//   gulp.watch('변화를 감지할 위치',[처리할 task]) : 실시간으로 감지해서 변화를 처리하도록하는 기능




// gulpfile.js_ver2.0

var gulp = require('gulp');
var sass = require('gulp-sass');
var sync = require('browser-sync').create();

  //--- 기본 경로 설정
var url = {before:'./public/src', after:'./public/dist'};
var path = {
  sass:{
    src : url.before + '/scss/**/*.scss',
    dist : url.after + '/css'
  }
};
  //--- sass설정
gulp.task('sass',function(){
  return gulp.src(path.sass.src)
             .pipe(sass().on('error',sass.logError))
             .pipe(gulp.dest(path.sass.dist));
});
  //---서버생성(browser-sync)
gulp.task('sync',function(){
  return sync.init({
    port:0511,
    server:{baseDir:url.after}
  });//sync.init
});//gulp.task



  //--- 실시간 감지
gulp.task('mywatch', function(){
  gulp.watch(path.sass.src,['sass']);  // 여기에서, ['sass', 'html']처럼 추가 가능, 대신 순서는 지켜주어야 한다!
});

  //--- gulp명령어 입력하면 바로 수행하는 기능
//   gulp.task('default');  // default의 뜻은 '없다'이기 때문에, 
//                          // 터미널에서 $ gulp라고 치면 아무 것도 하지 않는다. 그래서 하기와 같이 어떠한 일을 할 것인지 기능을 작성해준다. 

//   gulp.task('default', ['sass','mywatch']);  // default를 작성해주지 않으면 gulp가 어떤 기능을 실행해야 할지 몰라한다. 
//                                              // 그래서 반드시 default를 작성한 후, 'sass','mywatch'라고 써야
//                                              // 어떤 기능을 할지 알아채고 실행한다. 
gulp.task('default',['sync','sass','mywatch']);
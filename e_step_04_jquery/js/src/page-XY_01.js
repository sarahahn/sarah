/* page-XY */
(function($){
  // page-X, page-Y에 대해 공부하자
  // event.pageX,    event.pageY
  // .on('mousemove')

  $('#wrap').on('mousemove', function(e){
    var pageX = e.pageX;
    var pageY = e.pageY;
    var winW = $(window).width();

    $('.x').children('span').text(pageX);
    $('.y').children('span').text(pageY);
    // 여기서의 기준은 browser. but, document를 기준으로 해도 괜찮음. 
    // 사용하려는 좌표는 모니터의 크기에 따라 달라지게 된다.
    // 그래서 모두 동일한 환경으로 setting하려고 한다. 
    // 0~100
    // 마우스 좌표 / 내가 가진 브라우저 화면의 가로값 *100
    // 사용할 크기 / 기준크기 *100  -> vw, vh계산 가능

    // var myX = pageX / winW * 100;
    // var myY = pageY / winW * 100;
    // 정수로 바꿔주자!!! (하기와 같이)
    var myX = parseInt(pageX / winW * 100);
    var myY = parseInt(pageY / winW * 100);

    // 변경된 수치값 체크
    $('.x').children('span').text(myX);
    $('.y').children('span').text(myY);
    // 이렇게 하면 소숫점이 다 나옴. 
    // 정수로 바꿔 주려고 함. 
    // parseInt() ==> 정수로 변환
    // Math.random() ==> 0~1까지 랜덤 숫자
    // Math.ceil() ==> 올림
    // Math/round() ==> 반올림



  })// #wrap에서의 mousemov event끝.
})(this.jQuery);
/* mousewheel_02.js */

(function($){

  // 최초에 브라우저 위치를 상단으로 이동
  var body = $('html');
// .view 갯수를 파악
var view = $('.view');
  var viewLength = view.length;
  console.log(viewLength);
  // 각각의 offset().top위치를 파악

  // 1번째 위치 test
  var v1_top = view.eq(0).offset().top;
  console.log(v1_top);

  // 3번째 위치 test
  var v1_top = view.eq(3).offset().top;
  console.log(v1_top);

  //각각의 내용을 배열로 저장(반복을 처리할 예정임!)
  var viewList = [];
  var i = 0;
  var vTop;
  for(; i<viewLength; i++){
    var vTop = view.eq(i).offset().top;
    console.log(vTop);  // 위치값 확인. 

    viewList[i] = vTop;
  }
   console.log(viewList);


    var wheelnumber = 0;
// mousewheel사용 --------------------------------------------
  body.on('mousewheel DOMMouseScroll', function(event){
    // 마우스 휠 기능 만들어서 불러오기 (복잡한 계산을 하지 않아도 된다!!!!)
    var myWheel = WheelEvent(event);

    // console.log(mywheel);

    // 스크롤 움직일때 사용된 값에 의해 페이지 이동 처리.
    var myScroll = body.scrollTop(viewList[1]);
    // 마우스 휠 처리시 숫자 count 변경 처리
    wheelnumber += myWheel;
    console.log(wheelnumber);

    // 0보다 작아지는 경우
    if(wheelnumber < 0){
      wheelnumber=0;
    }
    // 화면에 보여줄 갯수의 숫자보다 클 경우
    else if(wheelnumber >= viewLength){
      wheelnumber = viewLength -1;
    }

     // 마우스 휠 사용 시, 해당 위치로 이동
    // $('html, body').scrollTop(viewList[wheelnumber]);

    // 마우스 휠 사용시 애니메이션으로 이동
    $('html,body').stop().animate({scrollTop:viewList[wheelnumber]});

    console.log(wheelnumber);

  });// body.on(mousewheel) 끝




})(this.jQuery);
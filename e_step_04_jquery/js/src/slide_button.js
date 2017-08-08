// slide_button.js

(function($){
//------------------------------------------------
  // 브라우저의 스크롤크기를 제외한 내부 가로사이즈
  // var winWidth = window.innerWidth;
  var winWidth2 = $(window).innerWidth();
  // console.log(winWidth);
  console.log(winWidth2);


//  append의 2가지 방법은 하기를 참조하라!
  $('#headBox').append( $('#addBanner'));   // 1. 다른 요소를 불러오는 방법
  $('#headBox').append( $('<div class="bg_box">bgbox1</div>'));  // 2. 없는 요소를 생성하는 방법
  // append : 뒤에 추가하겠다는 뜻. 또한 다른 div의 기능을 move하고 있음. (다른 div의 기능을 가져오는 경우도 있음.)
  //           따라서, 기존에 있는 이름이 아니라, 새로운 이름을 작성하여 넣는 것이 좋다. 

  // css를 설정.
  $('.bg_box').css({'width': winWidth2, height:100+'%', 'position':'absolute','top':0, 'left':50+'%', zIndex:-100,
                    'background-color':'#faa','marginLeft':-winWidth2/2});
  $('.bg-box').parent().css({'position':'relative'});



// 1. .me_link이름을 .slide_btn>ul에 적용
// show/hide - fadeIn/fadeOut - slideDown/slideup - addClass/removeClass 사용
$('.slide_btn>ul').addClass('me_link');

// 2. .slide_btn>ul>li의 가로값을 세로에도 적용(가로 == 세로)
// 괄호 안에 숫자 입력하면 데이터 적용, 작성하지 않으면 불러오기
//   $('slide_btn>ul>li').css('width'); // 기본 가로값 파악
//   $('slide_btn>ul>li').width(); // 기본 가로값
//   $('slide_btn>ul>li').innerWidth(); // padding포함
//   $('slide_btn>ul>li').outerWidth(); // border포함
//   $('slide_btn>ul>li').outerWidth(ture);  // margin값 포함

var slide_li_width = $('.slide_btn>ul>li').width();
$('.slide_btn>ul>li').height(slide_li_width);



//------------------------------------------------
})(this.jQuery);
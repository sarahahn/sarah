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
// $('.slide_btn>ul').addClass('me_link');  // 변수 지정하였으므로 주석처리.
var slide_btn=$('.slide_btn');
var slide_ul=slide_btn.children('ul');
var slide_li=slide_ul.children('li');
var slide_button=$('.slide_btn').find('button');
var slide_icon = slide_button.find('i');

slide_ul.addClass('me_link');

// 2. .slide_btn>ul>li의 가로값을 세로에도 적용(가로 == 세로)
// 괄호 안에 숫자 입력하면 데이터 적용, 작성하지 않으면 불러오기
//   $('slide_btn>ul>li').css('width'); // 기본 가로값 파악
//   $('slide_btn>ul>li').width(); // 기본 가로값
//   $('slide_btn>ul>li').innerWidth(); // padding포함
//   $('slide_btn>ul>li').outerWidth(); // border포함
//   $('slide_btn>ul>li').outerWidth(ture);  // margin값 포함


var slide_li_width = $('.slide_btn>ul>li').width();
$('.slide_btn>ul>li').height(slide_li_width);

slide_btn.addClass('leftMove');


// click이벤트('열기버튼'누르면 나오게 만들기)
// clikc시 .leftMove를 삭제처리하게 만들음. 
slide_button.on('click',function(e){
  e.preventDefault();
  // slide_btn.removeClass('leftMove');
  slide_btn.toggleClass('leftMove',500);
// if문을 이용하여 이모지(이모티콘) 변경 처리
slide_icon.removeClass('fa-arrow-right').addClass('fa-arrow-left');
});


// 그렇다면!!!! 열기글자와 닫기글자 기능 토글을 사용하려면?????
// console.log( slide_button.text() );  // 어떤 text내용이 들어있는지 확인.
// console.log( slide_button.html() );  // 어떤 html요소와 text내용이 들어있는지 확인.
                                        // 요소코드로 작성하지 않으면 글자로 인지
// console.log( slide_button.text('닫기') );
// console.log( slide_button.html('<div>닫기') ); // text와 html의 차이점 : html은 코드까지 바꾼다. 
slide_button.find('span').text('닫기');



// 버튼에 마우스 올렸을 경우 .slide_btn이 살짝 나오기 (약 10px정도)



//------------------------------------------------
})(this.jQuery);
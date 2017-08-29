//scrollFix.js

(function($){
//---------------------------------------

    // 화면상의 높이 계산하기 (브라우저에서 보이는 최초의 높이값)
var winH = $('html').innerHeight();
console.log(winH);
var headH = $('#headWrap').innerHeight();
console.log(headH);

    // header위치 브라우저 하단에 위치하게 만들기
$('#adBanner').height(winH - headH);


//---------------------------------------


  // 1. 먼저, headBox가 위에서 얼마나 내려와있는지 값을 찾자!
  //  (#headBox의 위치 파악하기(document)의 상단에서부터 offset()값)
  var headOffset = $('#headBox').offset().top;
  console.log(headOffset);
  
  // 스크롤이 움직였을 때
  $(window).on('scroll', function(){
    // 스크롤 값 확인.
    var scT = $(this).scrollTop();
    // console.log(scT);


  // 스크롤의 위치와, #headBox의 위치가 일치하면 (보다 더 크더나 같으면)
  // #headBox를 상단에 고정 #headWrap{position:fixed; top:0; left:0;}
  if(headOffset <= scT){
    $('#headWrap').addClass('fixedTop');
  }

  // 스크롤의 위치와, #headBox의 위치가 일치하지 않으면 (보다 더 작으면)
  // #headBox의 위치를 원해의 위치로 돌아가게 만들기
   else{
    $('#headWrap').removeClass('fixedTop');
   }



  });// $(window).on 끝. (스크롤 움직이면 스크롤 위치 값을 확인할 수 있음.)

})(this.jQuery);
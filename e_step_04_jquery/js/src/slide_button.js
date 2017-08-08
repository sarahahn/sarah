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

//------------------------------------------------
})(this.jQuery);
// onepagescroll.js

(function($){
  var nav = $('#gnb');
  var nav_a = nav.find('a');

  // ※ nav클릭시 선택한 nav의 위치로 이동하는 것을 만들꺼임!
  nav_a.on('click',function(e){
    e.preventDefault();
    $('html,body').animate({scrollTop:$(this.hash).offset().top},500);
  });

})(this.jQuery);
// gallery_01.js

(function($){
  //---------------------------
  var box = $('.gallery_box');
  var list = $('.gallery_list');
  var timed = 500;
  var li = list.children('li');

  //gallery_li클릭
  li.on('click',function(e){
    e.preventDefault();
    var _this = $(this);

    // console.log( $(this) );
    // console.log( $(this).index() );
    // console.log( $(this).attr('data-src') );
    // console.log( $(this).attr('data-alt') );

    // var gb = box.find('img').attr('src');
    // console.log(gb);

  //box에 들어있는 속성 src의 값을, 선택되었던 li의 속성 data-src의 값으로 변경
    var _mySrc = _this.attr('data-src');
        _myAlt = _this.attr('data-alt');

    box.find('img').attr({'src':_mySrc, 'alt':_myAlt});
//  여기까지가, 클릭하면 선택한 이미지가 큰 화면으로 나타나는 공식.



  });

  //---------------------------
})(this.jQuery);
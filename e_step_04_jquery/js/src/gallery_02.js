// gallery_01.js

(function($){
  //---------------------------
  var box = $('.gallery_box');
  var list = $('.gallery_list');
  var timed = 500;
  var li = list.children('li');
  //  큰 이미지는 작은 섬네일 파일의이름 뒤에 '_big'의 이름 추가로 포함된다.(규칙을 만들어주셈) 
  // ../img/modal_gallery/img/j01.jpg  ==> ../img/modal_gallery/img/j01_big.jpg

  //gallery_li클릭
  li.on('click',function(e){
    e.preventDefault();
    var _this = $(this);
    var _imgSrc = _this.find('img').attr('src');
    var _imgAlt = _this.find('img').attr('alt');
    var _imgBox = box.find('img');

    // console.log('사용된 이미지는:', _imgSrc);
    // console.log('이미지에 대한 내용은:', _imgAlt);

    var _cut = _imgSrc.slice(0, -4);
    var _textPlus = _cut+'_big.jpg';
    // console.log(cut);
    console.log(_textPlus);

    _imgBox.attr('src', _textPlus);


  });

  //---------------------------
})(this.jQuery);
// json_01.js
// JSON(javascript object Notation - 자바스크립트 객체 표현방법)
// 과거 sql(db) -> : 관계형db - table형태 : mySql, oracle, msSql, mariaDB...
// 현재 sql(bd) -> 빅데이터를 처리하거나 좀 더, 복잡한 구조를 처리하기 위해 개량 : mongoDB
// .html(); - 코드가 포함된 html형식의 값을 가져오거나, 담아줄 때 사용.
// .val();  - form형식의 값을 가져오거나 입력할때 사용
// .text(); - 글자를 가져오거나, 글자를 변경.
// .append() , .appendTo()
// .prepend() , .prependTo()

(function($){
  var db = [
    {'name':'이도형','gender':'male'},
    {'name':'전혜빈','gender':'female'},
    {'name':'김하영','gender':'female'},
    {'name':'안영란','gender':'male'},
    {'name':'박새나','gender':'female'},
    {'name':'김승희','gender':'male'},
    {'name':'이현준','gender':'male'},
    {'name':'서보람','gender':'male'},
    {'name':'이수진','gender':'female'},
    {'name':'이단비','gender':'female'},
  ];
  // console.log(db[1].gender, db[0].name);  // 제대로 적용 되는지 확인.

  var headBox = $('#headBox');
  var head_ul = headBox.children('ul');
  var head_li = head_ul.children('li');

  // 1. html문서를 담을 수 있다. 
  // head_li.eq(0).html('<span>').text(db[0].name);

  // 2. for문으로 만들기
    var i = 0;
    var li_length = head_li.length;  // 갯수 확인

    for (; i<li_length; i++){
      // console.log(i); // 확인.
      head_li.eq(i).html('<span>')
      head_li.eq(i).find('span').text(db[i].name);
        // 순서 : html에 'span'을 만들고 
        // find로 'span'을 찾은 후에, db[i].name값을 넣으세요!
    }


})(this.jQuery);
/* page-XY_02.js */
(function($){
  // window width확인해야 함. 
  // window height확인해야 함. 
  // mouse이동 시 event사용, 그리고 그때 x,y값 파악
  // 좌표값을 일정한 크기로 제한(100값으로 제한)
  // 이미지 태그를 생성한 후, 
  // 해당값을 이미지의 파일명과 합쳐서 처리

  $('.my_img').on('mousemove',function(e){
  var winW = $('.my_img').innerWidth();
  var pageX = e.pageX;
  var imgOffsetLeft = $('.my_img').offset().left;


    // var myPosition = pageX / myWidth *100;
    // var myPosition_p = parseInt(myPosition);
    // // myPosition값이 소수점으로 나와서.. .정수로 바꿔주는 작업 함!!!!
    // console.log(myPosition_p);

    // 사용할 크기 / 기준크기 *100
    var myPageX = parseInt( (pageX-imgOffsetLeft) / winW * 100 );
    // 크기값 변경 내용 검증
      //console.log(myPageX);

      $('.my_img').html('<img>');
      var useImg = $('.my_img').find('img');

      // 속성 메소드   .attr();
      var url = '../img/page_xy/';
      useImg.attr({src:url+'pageImg'+myPageX+'.jpg',
                  alt :'page x,y값을 사용한 이미지 테스트'});
      // p에 해당하는 이미지 사용설명 처리
      $('p').find('span').text(url + 'paseImg_'+myPageX +'.jpg');
      // 이미지가 있으면 alt는 안보이고, image가 있으면 alt는 보이지 않음.


  });// document.on 이벤트 끝
})(this.jQuery);
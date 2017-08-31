// randing.js

(function($){
  // 스크롤 이벤트 사용
    console.log( $('body').css('paddingTop') );

  $(window).on('scroll', function(){
    // offset().top 500만큼 이동하면, 
    // #headBox의 높이와, 배경색상을 변경처리
    // 그림자를 생성

    var winOffset = $(this).scrollTop(); // 여기서의 $(this)는 window임.
    var timed = 500;
    // console.log(winOffset); 
      // console.log의 결과는 error.
      // 이유: 우리가 주로 사용하는 영역은 document.
      // document내부에서 기능을 사용하는 것들은 모두 요소(태그, 속성 .... )을 사용하여 처리하는 기능 - DOM.
      // 하지만, $(window)내용은, 자바스크립트 상에서 window객체
      // window는 document보다 더 큰 범위영역임, 곧 브라우저 자체를 말함. - BOM.

    // if(winOffset >= 1000){
    //   $('body').animate({paddingTop:'60px'});// body의 animate끝.
    //   $('#headBox').css({backgroundColor:'#afc', 
    //                           height:'60px', boxShadow:'0.2em 0.2em 0.2em #555',
    //                           transition:'all 500ms'});// #headBox의 animate기능 끝.
    //   $('#headBox').children().animate({height:'30px'});
    // }else{}
    // // if(winOffset<=500) 끝.


    // 다시 하자!!!
    if( winOffset >= 1000 ){
      $('body').addClass('scroll',{duration:timed});
      $('#headBox').addClass('scroll',{duration:timed});
      $('#headBox').children().addClass('scroll',{duration:timed});
    }else{
      $('body').removeClass('scroll',{duration:timed});
      $('#headBox').removeClass('scroll',{duration:timed});
      $('#headBox').children().removeClass('scroll',{duration:timed});
    }




  });// $(window)스크롤 이벤트 끝


})(this.jQuery);
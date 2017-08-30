// mousewheel_01
(function($){
  var para = $('p');
  para.text('텍스트');  // p태그의 text내용을 '텍스트'로 바꾼다!

  var body = $('this,body');
  body.on('mousewheel DOMMouseScroll', function(event){
    // 반응했는지만 알아보는 것임...text
    para.text('마우스 휠 반응');
    var E = event.originalEvent;
    var delta = 0;
    // console.log(event.originalEvent.wheelDeltaY);   
      // 근데!!! firefox가 안먹음.....

      // 그래서 firefox event test 할꺼임
      console.log(E);

      // firefox DOMMouseScroll 기능에 따라 처리
      if(E.detail){
        delta = E.detail*-40;
        // console.log(delta);
      }
      // 기타 다른 브라우저
      else{
        delta = E.wheelDeltaY;
        // console.log(delta);
      }
       // 여기서의 문제점 : OS문제, 
       //                   firefox에서 detail확인 시, window에서는 3/-3으로 확인됨.
      //                    그러나 mac에서는 값이 1/-1로 확인 됨.
      //                     또한 wheeldelta는 120/-120으로 확인 됨. 
      //                    그래서 값을 맞춰줄려고 *40을 한것이지만, 이 와중에 mac은 또 값이 안맞음.. 
      //                     그래서 그냥 변수로 값을 1/-1로 주고, window와 mac이 같은 값으로 움직이게끔 맞춰주었다.


      // 각 OS별 수티값이 다르기 때문에 동일한 수치로 조정
      // if(delta <= 0){
      //   delta = -1;
      // }else{
      //   delta =1;
      // }
      // console.log(delta);
      
      // 상기 if문 사망식으로 작성할 것임. (하기)
      (delta <= 0)? (delta =-1) : delta =1;

      // console.log(delta);
      // return delta;
      switch(delta){
        case -1:
        $('body').addClass('down').removeClass('up');
        break;

        case 1:
        $('body').addClass('up').removeClass('down');
        break;
      }// switch



  });// body.on 끝
})(this.jQuery);
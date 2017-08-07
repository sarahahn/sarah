// accordion_02.js
  // 이러한 확인이 필요한 이유 : 각 모니터나, 데이터마다 기로, 높이값이 다르기 때문에,,, size를 파악해야 할 일이 있으니까!!!!!!!


(function($){
  // +++++++++++++++++++++++++++++++++++++++++++
  // drop down메뉴
  var gnb = $('#gnb');
  var gnbLi = $('#gnb>ul>li');
  var gnbOl = gnbLi.find('ol');


  // mouseenter : 마우스 올렸을 경우
  // mouseleave : 마우스 벗어났을 경우
  gnbLi.on('mouseenter', function(){
    $(this).find('ol').stop().slideDown();
     })
     .on('mouseleave', function(){
    gnbOl.stop().delay(300).slideUp();
     });










  // 아코디언 메뉴 만들기
  var conBox = $('#contentBox');
  var conBoxDl = conBox.children('dl');
  var conDt = conBoxDl.children('dt');
  var conDd = conBoxDl.children('dd');


// 1. 가로값 파악하기
//   var ddWidth = parseInt(conDd.eq(0).width());
//   var ddPdL = parseInt(conDd.eq(0).css('paddingLeft'));
//   var ddPdR = parseInt(conDd.eq(0).css('paddingRight'));



// // //  문자를 숫자(정수)로 변환시키는 명령어! (parseInt)
// //   console.log('width:',ddWidth);
// //   console.log('padding-left:',ddPdL);
// //   console.log('padding-right:',ddPdR);


  var ddFullWidth = conDd.eq(0).innerWidth();
  console.log(ddFullWidth);
  // innerWidth();        width+padding크기값을 가져올 경우 사용
  // outerWidth();        width+padding+border크기값을 가져올 경우 사용
  // outerWidth(true);    width+padding+border+margin크기값을 가져올 경우 사용
  // width();             width값만 가져올 경우 사용하는 형태
  // css('padding');      padding값만 가져올 경우 사용하는 형태

  // .1번



  // 2. dt클릭 이벤트
  // 선택된 dt뒤의 dd를 숨기게 만들기
  conDt.on('click',function(event){
    event.preventDefault();
    var _$this = $(this);  // 여기서의 this는 this가 포함되어있는 function을 나간 후, 부모의 선택자를 의미함으로, conDt가 된다. 
    var thisNext = _$this.next('dd');

    thisNext.siblings('dd').animate({'width':0, 'overflow':'hidden'}, function(){
      var _this = $(this);  // 여기서의 this는 this가 포함되어있는 function을 나간 후, 부모의 선택자를 의미함으로, thisNext.siblings('dd')가 된다. 
      _this.css({'display':'none'});
    });

    // 선택된 dt뒤의 dd를 나타나게 만들기
    // thisNext.css({'display':'block', 'width':0, 'overflow':'hidden'})
    //         .animate({'width':ddFullWidth+'px'});  // if문으로 내려줌으로 주석처리!

    // 조건을 확인하여 움직이지 않거나, 또는 나타나게 만들기

    var nextDdDp = thisNext.css('display');
    if(nextDdDp == 'none'){
      // 선택된 dt뒤의 dd는 나타나게 만들기
      thisNext.css({'display':'block', 'width':0, 'overflow':'hidden'})
              .animate({'width':ddFullWidth+'px'});
    }  // else{
    //   thisNext.css({width:ddFullWidth+'px'});
    // } // 현재 else 부분이 굳이 필요가 없으므로 주석처리 함. 


    //dl의 범위에서 넘치는 경우 일부영역 숨김처리
    conBoxDl.css({'overflow':'hidden'});
  });  // .2번




  // +++++++++++++++++++++++++++++++++++++++++++
})(this.jQuery);
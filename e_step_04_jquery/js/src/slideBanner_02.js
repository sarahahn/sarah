// slideBanner_02.js

(function($){
  // 1. slide indicator를 통해 배너가 움직이도록 처리
  // 2. 좌, 우 버튼을 클릭해서 배너가 움직이도록 처리
  // 3. 좌,우 버튼을 클릭 시 indicator도 같이 처리

// 1. 기능 처리 - 좌,우 버튼은 임시로 숨김처리 - 내가 쓸 것만 일단 보고, 확인하려고 숨김처리 하는 것임.
  // $('.slide_btn').hide();
  // indicator를 클릭 시 해당하는 값이 이동.

  var indi = $('.indicator');
  var indi_li = indi.children();
  var banner = $('#bannerBox');
  var bannerChild = banner.children();
  var banner_length = bannerChild.length;
  var lBtn = $('.l_btn');
  var rBtn = $('.r_btn');
  var i = 0; // 하기 function밖에 써야함! 안에 쓰면 안됨.


// 좌,우 버튼 클릭 시 일정 위치에서 사라지거나, 나타나게 만드는 기능을 함수화 처리.
// 상기 주석처리된 기능과 같지만, 하기와 같이 한 줄로 간단하게 써줌. 
  function BtnEnd(){
    if(i == 0){
      lBtn.fadeOut();
      rBtn.fadeIn();
    }else if(-i == banner_length-1){
      rBtn.fadeOut();
      lBtn.fadeIn();
    }else{
      lBtn.fadeIn();
      rBtn.fadeIn();
    }// if문 끝
    console.log(i);
  }// function BtnEnd끝

  // 변수값보다 함수호출이 먼저 오면 안됨.
  BtnEnd(); // 함수 호출 방법


// 함수안의 함수를 줄여쓰는 방법
// rBtn.on('click',rBtn.BtnEnd(i++));
// 함수.on('기능', 원하는 함수);  ---> 공식


  indi_li.on('click',['button'], function(e){
    e.preventDefault();

    var _thisEq = $(this).index();
    // console.log(_thisEq);  // 순서확인 검증

    banner.animate({marginLeft:_thisEq * -100+'%'});
    indi_li.eq(_thisEq).addClass('active').siblings().removeClass('active');
    //_this.addClass('active').siblings().removeClass('active');
   i = _thisEq;

     BtnEnd(); 
  }); // indi_li.on끝.



// 2번 좌, 우 기능을 위해 indicator임시로 숨김.
  // indi.hide();


  lBtn.on('click', function(){
    i += 1;
    banner.animate({marginLeft: i * 100 + '%'});
    //   if(i == 0){
    //   lBtn.fadeOut();
    //   rBtn.fadeIn();
    // }else{
    //   rBtn.fadeIn();
    //   lBtn.fadeIn();
    // }
    indi_li.eq(-i).addClass('active').siblings().removeClass('active');
    BtnEnd(); // 함수 호출 방법

  });// lBtn.on끝


  rBtn.on('click', function(){
    // 클릭 시 일정한 값이 계속 누적되도록 처리
    // -100% -> -200% -> -300% ....
    i -= 1;
    // console.log(i);

    banner.animate({marginLeft: i * 100 + '%'});
      // 여기까지만 하면, banner가 brower를 지나 밖으로 계속 쭉쭉 빠짐...
    // 그래서, 내용이 마지막에 위치하면 btn이 사라지게 만들 꺼임... (대신, 이 기능은 banner가 한바퀴 돌지는 못한다.)
    // if(-i == banner_length-1){
    //   rBtn.fadeOut();
    //   lBtn.fadeIn();
    // }else{
    //   rBtn.fadeIn();
    //   lBtn.fadeIn();
    // }
    indi_li.eq(-i).addClass('active').siblings().removeClass('active');
    BtnEnd(); // 함수 호출 방법
    });






})(this.jQuery);
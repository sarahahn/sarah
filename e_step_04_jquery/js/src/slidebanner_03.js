// slideBanner_02.js

// slideBanner_02.js
(function($) {
  // 1. slide indicator를 통해 배너가 움직이도록 처리
  // 2. 좌,우 버튼을 클릭해서 배너 이동 처리
  // 3. 좌,우 버튼을 클릭시 indicator도 같이 처리

// 좌, 우 버튼 일정 위치에서 사라지거나, 나타나게 만드는 기능을 함수화 처리
  function BtnEnd(i){
    // if(i <= 0){
    //   i = 0;
    //   // 복제된 처음 이미지로 이동 후
    //   banner.stop().animate({marginLeft:-i * 100 + '%'}, function(){
    //     // 마지막으로 위치 이동
    //     if(i >= banner_i-1){
    //     i = 1;
    //   $(this).css({marginLeft:-i * 100 + '%'});
    //   IndiI(i);
    //   }
    //   // i=banner_i-1;
    //   });
    //   // lBtn.fadeOut();
    //   // rBtn.fadeIn();
    // }else{
    //   banner.stop().animate({marginLeft:-i * 100 +'%'});
    //   // i=banner_i-1;
    // //   rBtn.fadeOut();
    // //   lBtn.fadeIn();
    // // }else{
    // //   lBtn.fadeIn();
    // //   rBtn.fadeIn();
    // }
    // // console.log(i);


    banner.stop().animate({marginLeft: -i * 100 + '%'});
    indi_li.eq(i).addClass('active').siblings().removeClass('active');
  }

  // indicator클릭시 해당하는 값이 이동
  var banner = $('#bannerBox');
  var banner_child = banner.children();
  var banner_i = banner_child.length;  // 복제하기 전의 갯수를 파악
console.log(banner_i);
  var indi = $('.indicator');
  var indi_li = indi.children();

  var lBtn = $('.l_btn');
  var rBtn = $('.r_btn');
  var i = 1;

  // 변수값보다 함수호출이 먼저되면 undefined 또는 에러를 도출
  BtnEnd(i);


// ------------ 4번기능처리
// 마지막요소를 복제
var cloneBanner = banner_child.last().clone();
// banner.prepend(cloneBanner)
cloneBanner.prependTo(banner);

banner_child = banner.children(); // 다시 할당 해주고!!
banner_i = banner_child.length; // 복제 후, 갯수를 재확인
   // 복제를 해주는 이유는, banner가 뜨는 약간의 딜레이, 버그를 안보이게 해주려고!!!!
console.log(banner_i);
  // banner의 크기를 복제한 갯수 * 100% 많큼 수정 
  // css에서 수정할 수도 있지만, li가 더 늘어나는 경우에는 계속 바꿔줄 수 없으니 번거로움이 생김,,, 
  // 그래서 자동으로 변경하게끔 처리. 
  banner.css({'width':banner_i * 100 + '%'});
  // banner의 자식 요소 또한 전체크기 /(나누기) 갯수% 만큼으로 수정
  banner_child.css({width: 100 / banner_i + '%'});

  

// banner갯수와 동일하게 indicator 처리.
// 1. 해당html에 title을 넣어서 mouse hover시, 나타나게 하는 방법이 있고, 
// 2. json으로 처리하는 방법도 있음. 
// 지금은 1번 방법으로 할꺼임
var slideBanner = $('#slideBanner');
slideBanner.append('<ol class="indicator"></ol>');
var indi = $('.indicator');
// indicator 내부에 li값 및 button생성
// 반복기능을 이용하여 여러개의 li생성(test2)
var j=0;
for (;j < banner_i; j++){
  // 배너 내부의 li에 존재하는 속성 title의 값 가져오기
  var banner_t = banner_child.eq(j).attr('title');
indi.append('<li class="indi_'+ j +'"><button><span class="hidden">'+ banner_t +'</span></button></li>');
   }  // 원래 span사이에 '숨김내용'이 있었지만, html의 title을 가지고 오려고 내용을 지움. 

   var indi_width = indi.width();
   indi.css({marginLeft: -indi_width / 2});// indicator의 양이 많아질 수록 위치도 다시 지정해줘야 하는데, 알아서 가로값 위치 조정을 해줌.

var indi_li = indi.children();







// ------------ indicator 클릭
  indi_li.on('click',['button'],function(e) {
    e.preventDefault();
    var _this = $(this);
    i = _this.index();

    BtnEnd();
  });

  // 2. 좌,우 버튼을 클릭해서 배너 이동 처리
  rBtn.on('click',function() {
    i += 1;
    // BtnEnd(++i);
    if(i >= banner_i){
      i =1;
      banner.css({'marginLeft':0}).animate({marginLeft: -100 + '%'});
      indi_li.eq(i).addClass('active').siblings().removeClass('active');
      // IndiI(i);
    }else{
      banner.stop().animate({marginLeft:-i * 100 + '%'});
    }
    indi_li.eq(i).addClass('active').siblings().removeClass('active');
    // IndiI(i);
  });

  lBtn.on('click',function() {
    i -= 1;
    // BtnEnd(--i);
  });




})(this.jQuery);
